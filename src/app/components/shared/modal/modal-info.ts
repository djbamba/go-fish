/**
 * Content and behavior for modals
 */
export interface ModalInfo {
  title?: string;
  content?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  handleSubmit?: () => void;
  resultCallback?: (v: any) => void;
  reasonCallback?: (v: any) => void;
}
