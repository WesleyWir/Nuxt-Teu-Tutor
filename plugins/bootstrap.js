import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap'

export default (context, inject) => {
  const alert = Alert
  const button = Button
  const carousel = Carousel
  const collapse = Collapse
  const dropdown = Dropdown
  const modal = Modal
  const offCanvas = Offcanvas
  const popover = Popover
  const scrollSpy = ScrollSpy
  const tab = Tab
  const toast = Toast
  const tooltip = Tooltip

  inject('Alert', alert)
  inject('Button', button)
  inject('Carousel', carousel)
  inject('Collapse', collapse)
  inject('Dropdown', dropdown)
  inject('Modal', modal)
  inject('Offcanvas', offCanvas)
  inject('Popover', popover)
  inject('ScrollSpy', scrollSpy)
  inject('Tab', tab)
  inject('Toast', toast)
  inject('Tooltip', tooltip)
}
