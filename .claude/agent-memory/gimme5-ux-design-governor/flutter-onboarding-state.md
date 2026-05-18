# Flutter Onboarding State

## Overview
- Path: `gimme5-onboarding/flutter_onboarding/`
- Framework: Flutter (Dart)
- Purpose: Interactive onboarding prototype (NOT production app)
- Theme mode: Light only (ThemeMode.light hardcoded in main.dart)
- State management: InheritedWidget (AppStateScope + AppState)
- Phone frame wrapper: simulates mobile device in browser/desktop

## Screen Inventory (45 screens in lib/screens/)

### Authentication (5)
- splash_screen.dart
- welcome_screen.dart
- registra_social_screen.dart (social login)
- login_screen.dart
- social_cf_screen.dart (CF after social login)

### Personal Data (6)
- intro_steps_screen.dart
- nome_screen.dart
- email_screen.dart
- password_screen.dart
- cf_screen.dart (codice fiscale)
- telefono_screen.dart

### Fund Selection (5)
- step_piano_screen.dart
- sottoscrizione_screen.dart
- fondi_lista_screen.dart
- tutti_fondi_screen.dart
- fondo_dettaglio_screen.dart

### Document/Compliance (5)
- doc_reader_screen.dart (precontractual docs)
- doc_choice_screen.dart
- doc_disclaimer_screen.dart
- doc_consent_screen.dart
- doc_camera_screen.dart

### Identity Verification (5)
- doc_fronte_screen.dart
- doc_retro_screen.dart
- step_identita_screen.dart
- kyc_attesa_screen.dart
- kyc_successo_screen.dart

### AML (3)
- aml_intro_screen.dart
- aml_step_screen.dart
- aml_recap_screen.dart

### Rule Setup (4)
- regola_intro_screen.dart
- regola_importo_screen.dart
- regola_frequenza_screen.dart
- regola_conferma_screen.dart

### Profiling & Review (2)
- profilazione_screen.dart
- profilo_conferma_screen.dart

### Activation & Completion (6)
- step_attivazione_screen.dart
- firma_contratti_screen.dart
- attiv_fondo_screen.dart
- loading_screen.dart
- successo_screen.dart
- pagamento_successo_screen.dart

### Post-Onboarding (3)
- social_successo_screen.dart
- modifica_dati_screen.dart
- home_screen.dart

### Routing
- screen_router.dart -- central router mapping all screens

## Shared Widgets (lib/widgets/)
- g5_button.dart -- primary button component
- g5_bottom_cta.dart -- sticky bottom CTA
- g5_nav_bar.dart -- top navigation bar
- g5_notif_modal.dart -- notification/system modal
- g5_radio.dart -- radio button
- g5_sheet.dart -- bottom sheet
- g5_stepper.dart -- step indicator
- g5_toast.dart -- toast notification
- phone_frame.dart -- device frame wrapper
- fondo_card.dart -- fund display card

## Theme System (lib/theme/)
- gimme5_colors.dart -- full color system (light + dark schemes)
- gimme5_typography.dart -- Archivo + Inter type scale
- gimme5_theme.dart -- MaterialApp theme builder
- gimme5_constants.dart -- spacing, radius, other constants
- gimme5_design_system.dart -- barrel export

## Data (lib/data/)
- fondi.dart -- fund data models/mock data

## State (lib/state/)
- app_state.dart -- global app state (screen index, user data)

## Color Discrepancies (Flutter vs Figma DS)
| Token | Flutter | Figma | Delta |
|-------|---------|-------|-------|
| background | #F2F2F2 | #F6F6F6 (bg/primary) | Different |
| backgroundCard | #F4F4F4 | #FFFFFF (bg/secondary) | Different |
| primary400 | #F55A27 | #F55A27 | Match |
| neutral900 | #232323 | needs verification | - |
| backgroundDark | #0F0F0F | needs verification | - |

## Notes
- Onboarding flow matches As-Is closely: Welcome > Login > Personal > Fund > Rule > Identity > AML > Firma > Payment > Home
- Still uses "regola" terminology (not updated to "routine")
- No "obiettivo" creation in onboarding flow yet (brainstorming proposes this)
- Dark scheme defined but not activated
- Prototype only -- not wired to real backend
