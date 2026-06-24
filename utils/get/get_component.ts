import type { ComponentType } from 'nucleify'
import {
  AdDatePicker,
  AdInputMask,
  AdInputText,
  AdPassword,
  AdSelect,
  AdTextarea,
} from 'nucleify'

export function getComponent(type: ComponentType) {
  const componentMap = {
    'date-picker': AdDatePicker,
    select: AdSelect,
    'input-mask': AdInputMask,
    'input-text': AdInputText,
    password: AdPassword,
    textarea: AdTextarea,
  }

  return componentMap[type] || AdInputText
}
