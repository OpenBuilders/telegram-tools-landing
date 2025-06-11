import { useToast } from '@components';

export function useClipboard() {
  const { showToast } = useToast();

  return {
    copy: (text: string, message: string) => {
      navigator.clipboard
        .writeText(text.toString())
        .then(() => {
          showToast({ message, type: 'copy', time: 2000 });
        })
        .catch(() => {
          showToast({ type: 'error', message: 'Unable to copy' });
        });
    },
  };
}
