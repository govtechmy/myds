# @govtechmy/myds-react

## 0.0.21

### Patch Changes

- e71f6dc: Move eslint config from dependency to devDependency

## 0.0.20

### Patch Changes

- d92931f: Implement shared eslint config, and fixed lint issues
- d897cd3: Fix navbar height for mobile
- Updated dependencies [d92931f]
  - @myds/eslint-config@0.0.1

## 0.0.19

### Patch Changes

- 02810f0: Support asChild interaction for NavbarMenuItem
- fe0b3be: Update color of table cell
- b73a362: Fix Tabs line style off by 1px and remove divider

## 0.0.18

### Patch Changes

- 2558fb8: Fix alert dialog spacing

## 0.0.17

### Patch Changes

- 1ae118c: Fix Tooltip trigger animation
- 6fe6aa7: Fix Checkbox icon stroke too thin
- 8ec3c92: Fix spacing for DialogHeader based on border existence
- 2f311ad: Refactor Calendar, DatePicker & DateRangePicker to update selected date on month/year change
- 105565f: Fix adding border to Announcebar
- 263f775: Refactor CookieBanner component

## 0.0.16

### Patch Changes

- 07e9ffb: Refactored Masthead component

## 0.0.15

### Patch Changes

- 9d51bae: Refactor Navbar component
- 353589f: Restructure Footer component

## 0.0.14

### Patch Changes

- 4ce2d50: fix masthead responsive issue

## 0.0.13

### Patch Changes

- 40b8a2b: Remove vitest in favor of jest (storybook)
- d4ed3ec: 1. Remove asChild props from AnnounceBarDescription 2. Small refactor on AnnounceBatTag

## 0.0.12

### Patch Changes

- 7eeb60d: Fix to listen to theme changes and update the ThemeSwitch state accordingly
- 57bebb9: Fix ThemeContextProvider not recognising parent if reexported

## 0.0.11

### Patch Changes

- 6956a40: Added `useTheme` hook and documentation.
  Added `ThemeToggler` component and documentation.

## 0.0.10

### Patch Changes

- 1f49811: Fix: ButtonIcon preserve size

## 0.0.9

### Patch Changes

- f50b423: Fix: Make asChild non-default
- 2f6d05d: Fix peer dependency version to include react 19

## 0.0.8

### Patch Changes

- a61fba9: Add `hideClose` prop to DialogBody
- 26ed81e: Masthead css update (container)
- c45e030: remove DropdownTrigger `asChild` set as always true

## 0.0.7

### Patch Changes

- 3d24986: Added CookieBannerPreferencesDisplay and CookieBannerPreferencesToggle in Cookies Banner component.

## 0.0.6

### Patch Changes

- c309fd9: Fix to use ReactFragment instead of returning Element[]
- 3c99cca: Navbar Documentation update and added missing props in navbar components

## 0.0.5

### Patch Changes

- 475d3c6: Remove extra div in AccordionContent
- 2c925c1: Fixed input styling to fill width of parent by default
- 2efcf8e: Fix SearchBar's z-index
- 3535a3d: Implement stacked layout for Dialogue mobile view

## 0.0.4

### Patch Changes

- 1a9e476: Footer Documentation Update : MS integration and add classname and props missed in component
- 6181ab0: Fixed AlertDialogAction from recursion; Attach onDismissListener to DialogClose
- 650a846: Refactored AlertDialog to conform Dialog's changed API
- 7711524: Navbar Component
- 6e4317e: Add DialogBody which wraps DialogHeader,DialogContent,DialogFooter
- 3495d7f: Footer Documentation
- 0903c8f: add DialogBody, repurpose DialogContent
- 6e4317e: AlertDialog variants extended to 'default' | 'info'
- 8a0cb3b: Add CalloutClose wrapper component
- c0f469a: DropdownTrigger converted to full wrapper
  Documentation for Dropdown
- 6e4317e: Bind DialogClose to onDismiss if exists

## 0.0.3

### Patch Changes

- a973f87: Removed DialogOverlay and DialogPortal
- a973f87: Rename withCloseButton to dismissible and added onDismiss event listener

## 0.0.2

### Patch Changes

- 23aa39e: adding readme

## 0.0.1

### Patch Changes

- eeb6bd4: trial publish
