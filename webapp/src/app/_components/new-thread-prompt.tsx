
import Chat from '@/components/chat';
import { useCreateThread } from '@/lib/use-create-thread';
import { useState } from 'react';
import NewAssistantMessage from './new-assistant-message';
import { useImageAttachments } from '@/lib/use-image-attachments';


export default function NewThreadPrompt() {
  const [input, setInput] = useState('');
  const { imageAttachments, removeImageAttachment, addImageAttachments } = useImageAttachments();
  const createThread = useCreateThread({ redirect: true });

  return (
    <Chat>
      <NewAssistantMessage
        submitMessage={(event) => {
          event?.preventDefault();
          event?.stopPropagation();
          createThread(input, imageAttachments);
        }}
        input={input}
        handleInputChange={(event) => setInput(event.target.value)}
        imageAttachments={imageAttachments}
        addImageAttachments={addImageAttachments}
        removeImageAttachment={removeImageAttachment}
      />
    </Chat>
  );
}
