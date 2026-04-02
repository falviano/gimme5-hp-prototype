figma.showUI(__html__, { width: 320, height: 200 })

var FRAME_W  = 375
var GAP_X    = 40   // gap between frames inside a section
var PAD_X    = 48   // section left/right padding
var PAD_TOP  = 80   // space above frames (section title)
var PAD_BOT  = 48   // space below frames
var GAP_SEC  = 80   // vertical gap between sections

figma.ui.onmessage = async function(msg) {
  if (msg.type !== 'import') return

  var allScreens = msg.screens

  // Build ordered group list preserving flow order
  var groupOrder = []
  var groupMap = {}
  for (var i = 0; i < allScreens.length; i++) {
    var s = allScreens[i]
    if (!groupMap[s.group]) {
      groupMap[s.group] = []
      groupOrder.push(s.group)
    }
    groupMap[s.group].push(s)
  }

  // Load fonts
  var fontLoaded = false
  try {
    await figma.loadFontAsync({ family: 'Inter', style: 'Bold' })
    fontLoaded = true
  } catch(e) {}

  var cursorY = 0
  var allNodes = []

  for (var g = 0; g < groupOrder.length; g++) {
    var groupName = groupOrder[g]
    var items = groupMap[groupName]

    // Max frame height in this phase
    var maxH = 812
    for (var m = 0; m < items.length; m++) {
      var h = items[m].height || 812
      if (h > maxH) maxH = h
    }

    // Section dimensions
    var secW = PAD_X * 2 + items.length * FRAME_W + (items.length - 1) * GAP_X
    var secH = PAD_TOP + maxH + PAD_BOT

    // Create Figma Section (falls back to frame if API unavailable)
    var container = null
    var isSection = false
    try {
      container = figma.createSection()
      container.name = groupName
      container.x = 0
      container.y = cursorY
      container.resizeWithoutConstraints(secW, secH)
      figma.currentPage.appendChild(container)
      isSection = true
    } catch(e) {
      container = figma.createFrame()
      container.name = groupName
      container.resize(secW, secH)
      container.x = 0
      container.y = cursorY
      container.fills = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.96 } }]
      container.clipsContent = false
      figma.currentPage.appendChild(container)
    }
    allNodes.push(container)

    // Phase label (only needed inside frame fallback; sections show name natively)
    if (fontLoaded && !isSection) {
      var lbl = figma.createText()
      lbl.fontName = { family: 'Inter', style: 'Bold' }
      lbl.fontSize = 22
      lbl.characters = groupName.toUpperCase()
      lbl.fills = [{ type: 'SOLID', color: { r: 0.96, g: 0.35, b: 0.15 } }]
      lbl.x = PAD_X
      lbl.y = 20
      container.appendChild(lbl)
    }

    // Place frames inside the section, top-aligned
    var rowFrames = []
    var frameX = PAD_X

    for (var k = 0; k < items.length; k++) {
      var item = items[k]
      figma.ui.postMessage({ type: 'progress', text: item.label })

      var frameW = item.width  || FRAME_W
      var frameH = item.height || 812

      var frame = figma.createFrame()
      frame.name = item.label
      frame.resize(frameW, frameH)
      frame.x = frameX
      frame.y = PAD_TOP   // all aligned to the top
      frame.clipsContent = true

      try {
        var bytes = new Uint8Array(item.bytes)
        var image = figma.createImage(bytes)
        frame.fills = [{ type: 'IMAGE', imageHash: image.hash, scaleMode: 'FILL' }]
      } catch(e) {
        frame.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }]
      }

      container.appendChild(frame)
      rowFrames.push(frame)

      frameX += frameW + GAP_X
    }

    // Arrows between consecutive frames in this phase
    for (var c = 0; c < rowFrames.length - 1; c++) {
      try {
        var conn = figma.createConnector()
        conn.connectorStart = { endpointNodeId: rowFrames[c].id, magnet: 'RIGHT' }
        conn.connectorEnd   = { endpointNodeId: rowFrames[c + 1].id, magnet: 'LEFT' }
        conn.strokeWeight = 2
        conn.strokes = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }]
        conn.connectorStartStrokeCap = 'NONE'
        conn.connectorEndStrokeCap = 'ARROW_LINES'
        container.appendChild(conn)
      } catch(e) {}
    }

    cursorY += secH + GAP_SEC
  }

  figma.viewport.scrollAndZoomIntoView(allNodes)
  figma.ui.postMessage({ type: 'done', count: allScreens.length })
}
