export type CoinSliceData = {
  title: string;
  contentType?: "image" | "text" | "glb";
  imageUrl?: string;
  glbUrl?: string;
  glbScale?: number;
  glbYOffset?: number;
  glbRotationY?: number;
  text?: string;
  newpage?: boolean;
  listView?: boolean;
  buttons?: {
    label: string;
    icon: string;
    slug: string;
    newpage?: boolean;
    listView?: boolean;
    subPopUp?: boolean;
    subNewPage?: boolean;
    subButtons?: {
      subLabel: string;
      subIcon: string;
      subNewPage?: boolean;
      subPopUp?: boolean;
    }[];
  }[];
  showOutward?: boolean;
  isBlackText?: boolean;
};
