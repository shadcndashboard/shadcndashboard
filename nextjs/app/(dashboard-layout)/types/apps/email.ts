type AttachType = {
  id: string;
  image: string;
  title: string;
  fileSize: string;
};

export interface EmailType {
  id: number;
  from: string;
  thumbnail: string;
  subject: string;
  time: string | Date;
  To: string;
  emailExcerpt: string;
  emailContent: string;
  unread: boolean;
  attachment: boolean;
  starred: boolean;
  important: boolean;
  inbox: boolean;
  sent: boolean;
  draft: boolean;
  spam: boolean;
  trash: boolean;
  label: string;
  attchments?: AttachType[];
}
