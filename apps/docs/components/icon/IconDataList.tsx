import * as Icons from "@govtechmy/myds-react/icon";
import { ReactNode } from "react";

export type IconType =
  | "generic"
  | "filled"
  | "wysiwyg"
  | "social_media"
  | "media"
  | "legacy";

export type IconData = {
  name: string;
  type: IconType;
  svg: ReactNode;
};

export const icon_list: IconData[] = [
  //Generic Icons : 120 icons
  //Remove 1 Icon - Placeholder
  {
    name: "malaysia-flag",
    type: "media",
    svg: <Icons.MalaysiaFlagIcon />,
  },
  {
    name: "jata-negara",
    type: "media",
    svg: <Icons.JataNegaraIcon />,
  },
  {
    name: "hamburger-menu",
    type: "generic",
    svg: <Icons.HamburgerMenuIcon />,
  },
  {
    name: "sun",
    type: "generic",
    svg: <Icons.SunIcon />,
  },
  {
    name: "moon",
    type: "generic",
    svg: <Icons.MoonIcon />,
  },
  {
    name: "home",
    type: "generic",
    svg: <Icons.HomeIcon />,
  },
  {
    name: "search",
    type: "generic",
    svg: <Icons.SearchIcon />,
  },
  {
    name: "bell",
    type: "generic",
    svg: <Icons.BellIcon />,
  },
  {
    name: "user",
    type: "generic",
    svg: <Icons.UserIcon />,
  },
  {
    name: "user-group",
    type: "generic",
    svg: <Icons.UserGroupIcon />,
  },
  {
    name: "edit",
    type: "generic",
    svg: <Icons.EditIcon />,
  },
  {
    name: "trash",
    type: "generic",
    svg: <Icons.TrashIcon />,
  },
  {
    name: "plus",
    type: "generic",
    svg: <Icons.PlusIcon />,
  },
  {
    name: "plus-circle",
    type: "generic",
    svg: <Icons.PlusCircleIcon />,
  },
  {
    name: "zoom-in",
    type: "generic",
    svg: <Icons.ZoomInIcon />,
  },
  {
    name: "minus",
    type: "generic",
    svg: <Icons.MinusIcon />,
  },
  {
    name: "minus-circle",
    type: "generic",
    svg: <Icons.MinusCircleIcon />,
  },
  {
    name: "zoom-out",
    type: "generic",
    svg: <Icons.ZoomOutIcon />,
  },
  {
    name: "table",
    type: "generic",
    svg: <Icons.TableIcon />,
  },
  {
    name: "grid",
    type: "generic",
    svg: <Icons.GridIcon />,
  },
  {
    name: "list",
    type: "generic",
    svg: <Icons.ListIcon />,
  },
  {
    name: "upload",
    type: "generic",
    svg: <Icons.UploadIcon />,
  },
  {
    name: "download",
    type: "generic",
    svg: <Icons.DownloadIcon />,
  },
  {
    name: "check",
    type: "generic",
    svg: <Icons.CheckIcon />,
  },
  {
    name: "check-circle",
    type: "generic",
    svg: <Icons.CheckCircleIcon />,
  },
  {
    name: "cross",
    type: "generic",
    svg: <Icons.CrossIcon />,
  },
  {
    name: "cross-circle",
    type: "generic",
    svg: <Icons.CrossCircleIcon />,
  },
  {
    name: "govt-office",
    type: "generic",
    svg: <Icons.GovtOfficeIcon />,
  },
  {
    name: "putrajaya",
    type: "generic",
    svg: <Icons.PutrajayaIcon />,
  },
  {
    name: "lock",
    type: "generic",
    svg: <Icons.LockIcon />,
  },
  {
    name: "lock-2",
    type: "generic",
    svg: <Icons.Lock2Icon />,
  },
  {
    name: "expand",
    type: "generic",
    svg: <Icons.ExpandIcon />,
  },
  {
    name: "flag",
    type: "generic",
    svg: <Icons.FlagIcon />,
  },
  {
    name: "thumbs-up",
    type: "generic",
    svg: <Icons.ThumbsUpIcon />,
  },
  {
    name: "thumbs-down",
    type: "generic",
    svg: <Icons.ThumbsDownIcon />,
  },
  {
    name: "cursor",
    type: "generic",
    svg: <Icons.CursorIcon />,
  },
  {
    name: "accessible",
    type: "generic",
    svg: <Icons.AccessibleIcon />,
  },
  {
    name: "heart",
    type: "generic",
    svg: <Icons.HeartIcon />,
  },
  {
    name: "component",
    type: "generic",
    svg: <Icons.ComponentIcon />,
  },
  {
    name: "copy",
    type: "generic",
    svg: <Icons.CopyIcon />,
  },
  {
    name: "duplicate",
    type: "generic",
    svg: <Icons.DuplicateIcon />,
  },
  {
    name: "link",
    type: "generic",
    svg: <Icons.LinkIcon />,
  },
  {
    name: "link-diagonal",
    type: "generic",
    svg: <Icons.LinkDiagonalIcon />,
  },
  {
    name: "eye-show",
    type: "generic",
    svg: <Icons.EyeShowIcon />,
  },
  {
    name: "eye-hide",
    type: "generic",
    svg: <Icons.EyeHideIcon />,
  },
  {
    name: "ellipsis",
    type: "generic",
    svg: <Icons.EllipsisIcon />,
  },
  {
    name: "ellipsis-vertical",
    type: "generic",
    svg: <Icons.EllipsisVerticalIcon />,
  },
  {
    name: "calendar",
    type: "generic",
    svg: <Icons.CalendarIcon />,
  },
  {
    name: "clock",
    type: "generic",
    svg: <Icons.ClockIcon />,
  },
  {
    name: "filter",
    type: "generic",
    svg: <Icons.FilterIcon />,
  },
  {
    name: "filter-desc",
    type: "generic",
    svg: <Icons.FilterDescIcon />,
  },
  {
    name: "filter-asc",
    type: "generic",
    svg: <Icons.FilterAscIcon />,
  },
  {
    name: "map",
    type: "generic",
    svg: <Icons.MapIcon />,
  },
  {
    name: "direction",
    type: "generic",
    svg: <Icons.DirectionIcon />,
  },
  {
    name: "pin",
    type: "generic",
    svg: <Icons.PinIcon />,
  },
  {
    name: "warning",
    type: "generic",
    svg: <Icons.WarningIcon />,
  },
  {
    name: "warning-diamond",
    type: "generic",
    svg: <Icons.WarningDiamondIcon />,
  },
  {
    name: "warning-circle",
    type: "generic",
    svg: <Icons.WarningCircleIcon />,
  },
  {
    name: "info",
    type: "generic",
    svg: <Icons.InfoIcon />,
  },
  {
    name: "question-circle",
    type: "generic",
    svg: <Icons.QuestionCircleIcon />,
  },

  {
    name: "printer",
    type: "generic",
    svg: <Icons.PrinterIcon />,
  },
  {
    name: "book",
    type: "generic",
    svg: <Icons.BookIcon />,
  },
  {
    name: "globe",
    type: "generic",
    svg: <Icons.GlobeIcon />,
  },
  {
    name: "money",
    type: "generic",
    svg: <Icons.MoneyIcon />,
  },
  {
    name: "qr-code",
    type: "generic",
    svg: <Icons.QrCodeIcon />,
  },
  {
    name: "share",
    type: "generic",
    svg: <Icons.ShareIcon />,
  },
  {
    name: "folder",
    type: "generic",
    svg: <Icons.FolderIcon />,
  },
  {
    name: "folder-plus",
    type: "generic",
    svg: <Icons.FolderPlusIcon />,
  },
  {
    name: "folder-minus",
    type: "generic",
    svg: <Icons.FolderMinusIcon />,
  },
  {
    name: "document-filled",
    type: "generic",
    svg: <Icons.DocumentFilledIcon />,
  },
  {
    name: "document",
    type: "generic",
    svg: <Icons.DocumentIcon />,
  },
  {
    name: "document-add",
    type: "generic",
    svg: <Icons.DocumentAddIcon />,
  },
  {
    name: "document-minus",
    type: "generic",
    svg: <Icons.DocumentMinusIcon />,
  },
  {
    name: "excel",
    type: "generic",
    svg: <Icons.ExcelIcon />,
  },
  {
    name: "pdf",
    type: "generic",
    svg: <Icons.PdfIcon />,
  },
  {
    name: "word",
    type: "generic",
    svg: <Icons.WordIcon />,
  },
  {
    name: "attachment",
    type: "generic",
    svg: <Icons.AttachmentIcon />,
  },
  {
    name: "play",
    type: "generic",
    svg: <Icons.PlayIcon />,
  },
  {
    name: "pause",
    type: "generic",
    svg: <Icons.PauseIcon />,
  },
  {
    name: "email",
    type: "generic",
    svg: <Icons.EmailIcon />,
  },
  {
    name: "phone",
    type: "generic",
    svg: <Icons.PhoneIcon />,
  },
  {
    name: "mobile",
    type: "generic",
    svg: <Icons.MobileIcon />,
  },
  {
    name: "tablet",
    type: "generic",
    svg: <Icons.TabletIcon />,
  },
  {
    name: "desktop",
    type: "generic",
    svg: <Icons.DesktopIcon />,
  },
  {
    name: "bolt",
    type: "generic",
    svg: <Icons.BoltIcon />,
  },
  {
    name: "setting",
    type: "generic",
    svg: <Icons.SettingIcon />,
  },
  {
    name: "chat-bubble",
    type: "generic",
    svg: <Icons.ChatBubbleIcon />,
  },
  {
    name: "chevron-right",
    type: "generic",
    svg: <Icons.ChevronRightIcon />,
  },
  {
    name: "chevron-left",
    type: "generic",
    svg: <Icons.ChevronLeftIcon />,
  },
  {
    name: "chevron-down",
    type: "generic",
    svg: <Icons.ChevronDownIcon />,
  },
  {
    name: "chevron-up",
    type: "generic",
    svg: <Icons.ChevronUpIcon />,
  },
  {
    name: "column-expand",
    type: "generic",
    svg: <Icons.ColumnExpandIcon />,
  },
  {
    name: "column-collapse",
    type: "generic",
    svg: <Icons.ColumnCollapseIcon />,
  },
  {
    name: "arrow-up",
    type: "generic",
    svg: <Icons.ArrowUpIcon />,
  },
  {
    name: "arrow-down",
    type: "generic",
    svg: <Icons.ArrowDownIcon />,
  },
  {
    name: "arrow-incoming",
    type: "generic",
    svg: <Icons.ArrowIncomingIcon />,
  },
  {
    name: "arrow-outgoing",
    type: "generic",
    svg: <Icons.ArrowOutgoingIcon />,
  },
  {
    name: "arrow-back",
    type: "generic",
    svg: <Icons.ArrowBackIcon />,
  },
  {
    name: "arrow-forward",
    type: "generic",
    svg: <Icons.ArrowForwardIcon />,
  },
  {
    name: "arrow-forward-close",
    type: "generic",
    svg: <Icons.ArrowForwardCloseIcon />,
  },
  {
    name: "arrow-back-close",
    type: "generic",
    svg: <Icons.ArrowBackCloseIcon />,
  },
  {
    name: "undo",
    type: "generic",
    svg: <Icons.UndoIcon />,
  },
  {
    name: "redo",
    type: "generic",
    svg: <Icons.RedoIcon />,
  },
  {
    name: "logout",
    type: "generic",
    svg: <Icons.LogoutIcon />,
  },
  {
    name: "drop-arrow-down",
    type: "generic",
    svg: <Icons.DropArrowDownIcon />,
  },
  {
    name: "check-shield",
    type: "generic",
    svg: <Icons.CheckShieldIcon />,
  },
  {
    name: "check-star",
    type: "generic",
    svg: <Icons.CheckStarIcon />,
  },
  {
    name: "trophy",
    type: "generic",
    svg: <Icons.TrophyIcon />,
  },
  {
    name: "star",
    type: "generic",
    svg: <Icons.StarIcon />,
  },
  {
    name: "swap",
    type: "generic",
    svg: <Icons.SwapIcon />,
  },
  {
    name: "reload",
    type: "generic",
    svg: <Icons.ReloadIcon />,
  },
  {
    name: "megaphone",
    type: "generic",
    svg: <Icons.MegaphoneIcon />,
  },
  {
    name: "section",
    type: "generic",
    svg: <Icons.SectionIcon />,
  },
  {
    name: "text",
    type: "generic",
    svg: <Icons.TextIcon />,
  },
  {
    name: "button",
    type: "generic",
    svg: <Icons.ButtonIcon />,
  },
  {
    name: "gallery",
    type: "generic",
    svg: <Icons.GalleryIcon />,
  },
  {
    name: "carousel",
    type: "generic",
    svg: <Icons.CarouselIcon />,
  },
  {
    name: "video",
    type: "generic",
    svg: <Icons.VideoIcon />,
  },
  {
    name: "forms",
    type: "generic",
    svg: <Icons.FormsIcon />,
  },
  {
    name: "input-field",
    type: "generic",
    svg: <Icons.InputFieldIcon />,
  },
  {
    name: "database",
    type: "generic",
    svg: <Icons.DatabaseIcon />,
  },
  {
    name: "org-chart",
    type: "generic",
    svg: <Icons.OrgChartIcon />,
  },
  ////////////////////////

  // Icon Filled : 9 Icons
  ////////////////////////
  {
    name: "chevron-down-fill",
    type: "filled",
    svg: <Icons.ChevronDownFillIcon />,
  },
  {
    name: "chevron-right-fill",
    type: "filled",
    svg: <Icons.ChevronRightFillIcon />,
  },
  {
    name: "chevron-left-fill",
    type: "filled",
    svg: <Icons.ChevronLeftFillIcon />,
  },
  {
    name: "chevron-up-fill",
    type: "filled",
    svg: <Icons.ChevronUpFillIcon />,
  },
  {
    name: "warning-fill",
    type: "filled",
    svg: <Icons.WarningFillIcon />,
  },
  {
    name: "check-circle-fill",
    type: "filled",
    svg: <Icons.CheckCircleFillIcon />,
  },
  {
    name: "lock-fill",
    type: "filled",
    svg: <Icons.LockFillIcon />,
  },
  {
    name: "star-fill",
    type: "filled",
    svg: <Icons.StarFillIcon />,
  },
  {
    name: "cross-fill",
    type: "filled",
    svg: <Icons.CrossFillIcon />,
  },

  ////////////////////////

  // WYSIWYG Icon : 14 icons
  {
    name: "font",
    type: "wysiwyg",
    svg: <Icons.FontIcon />,
  },
  {
    name: "bold",
    type: "wysiwyg",
    svg: <Icons.BoldIcon />,
  },
  {
    name: "italic",
    type: "wysiwyg",
    svg: <Icons.ItalicIcon />,
  },
  {
    name: "underline",
    type: "wysiwyg",
    svg: <Icons.UnderlineIcon />,
  },
  {
    name: "strikethrough",
    type: "wysiwyg",
    svg: <Icons.StrikethroughIcon />,
  },
  {
    name: "link",
    type: "wysiwyg",
    svg: <Icons.LinkIcon />,
  },
  {
    name: "unlink",
    type: "wysiwyg",
    svg: <Icons.UnlinkIcon />,
  },
  {
    name: "numbered-list",
    type: "wysiwyg",
    svg: <Icons.NumberedListIcon />,
  },
  {
    name: "bulleted-list",
    type: "wysiwyg",
    svg: <Icons.BulletedListIcon />,
  },
  {
    name: "align-left",
    type: "wysiwyg",
    svg: <Icons.AlignLeftIcon />,
  },
  {
    name: "align-center",
    type: "wysiwyg",
    svg: <Icons.AlignCenterIcon />,
  },
  {
    name: "align-right",
    type: "wysiwyg",
    svg: <Icons.AlignRightIcon />,
  },
  {
    name: "align-justify",
    type: "wysiwyg",
    svg: <Icons.AlignJustifyIcon />,
  },
  {
    name: "reset-style",
    type: "wysiwyg",
    svg: <Icons.ResetStyleIcon />,
  },

  // Social Media Icon
  {
    name: "rss",
    type: "social_media",
    svg: <Icons.RSSIcon />,
  },
  {
    name: "facebook",
    type: "social_media",
    svg: <Icons.FacebookIcon />,
  },
  {
    name: "x",
    type: "social_media",
    svg: <Icons.TwitterXIcon />,
  },
  {
    name: "linkedin",
    type: "social_media",
    svg: <Icons.LinkedinIcon />,
  },
  {
    name: "instagram",
    type: "social_media",
    svg: <Icons.InstagramIcon />,
  },
  {
    name: "youtube",
    type: "social_media",
    svg: <Icons.YoutubeIcon />,
  },
  {
    name: "whatsapp",
    type: "social_media",
    svg: <Icons.WhatsappIcon />,
  },
  {
    name: "tiktok",
    type: "social_media",
    svg: <Icons.TiktokIcon />,
  },
  {
    name: "figma",
    type: "social_media",
    svg: <Icons.FigmaIcon />,
  },
  {
    name: "telegram",
    type: "social_media",
    svg: <Icons.TelegramIcon />,
  },
  {
    name: "github",
    type: "social_media",
    svg: <Icons.GithubIcon />,
  },
  {
    name: "google",
    type: "social_media",
    svg: <Icons.GoogleIcon />,
  },

  // Media Icons
  {
    name: "powerpoint-media",
    type: "media",
    svg: <Icons.PowerpointMediaIcon />,
  },
  {
    name: "excel-media",
    type: "media",
    svg: <Icons.ExcelMediaIcon />,
  },
  {
    name: "word-media",
    type: "media",
    svg: <Icons.WordMediaIcon />,
  },
  {
    name: "pdf-media",
    type: "media",
    svg: <Icons.PDFMediaIcon />,
  },

  // LEGACY Generic Icons
  {
    name: "dosm",
    type: "legacy",
    svg: <Icons.DOSMIcon />,
  },
  {
    name: "identity-jpn",
    type: "legacy",
    svg: <Icons.IdentityJPNIcon />,
  },
  {
    name: "car-jpj",
    type: "legacy",
    svg: <Icons.CarJPJIcon />,
  },
  {
    name: "book-moe",
    type: "legacy",
    svg: <Icons.BookMOEIcon />,
  },
  {
    name: "internet-mcmc",
    type: "legacy",
    svg: <Icons.InternetMCMCIcon />,
  },
  {
    name: "money-kwap",
    type: "legacy",
    svg: <Icons.MoneyKWAPIcon />,
  },
  {
    name: "helmet-jpa",
    type: "legacy",
    svg: <Icons.HelmetJPAIcon />,
  },
  {
    name: "train-mot",
    type: "legacy",
    svg: <Icons.TrainMOTIcon />,
  },
  {
    name: "unhcr",
    type: "legacy",
    svg: <Icons.UNHCRIcon />,
  },
  {
    name: "ribbon-ntrc",
    type: "legacy",
    svg: <Icons.RibbonNTRCIcon />,
  },
  {
    name: "weather-met",
    type: "legacy",
    svg: <Icons.WeatherMETIcon />,
  },
  {
    name: "flood-jps",
    type: "legacy",
    svg: <Icons.FloodJPSIcon />,
  },
  {
    name: "jakoa",
    type: "legacy",
    svg: <Icons.JAKOAIcon />,
  },
  {
    name: "blood-pdn",
    type: "legacy",
    svg: <Icons.BloodPDNIcon />,
  },
  {
    name: "ballot-spr",
    type: "legacy",
    svg: <Icons.BallotSPRIcon />,
  },
  {
    name: "fire-bomba",
    type: "legacy",
    svg: <Icons.FireBOMBAIcon />,
  },
  {
    name: "ambulance-mers",
    type: "legacy",
    svg: <Icons.AmbulanceMERSIcon />,
  },
  {
    name: "hospital-moh",
    type: "legacy",
    svg: <Icons.HospitalMOHIcon />,
  },
  {
    name: "phcorp",
    type: "legacy",
    svg: <Icons.PhcorpIcon />,
  },
  {
    name: "passport-imigresen",
    type: "legacy",
    svg: <Icons.PassportImigresenIcon />,
  },
  {
    name: "bnm",
    type: "legacy",
    svg: <Icons.BNMIcon />,
  },
  {
    name: "money-epf",
    type: "legacy",
    svg: <Icons.MoneyEPFIcon />,
  },
  {
    name: "money-lhdn",
    type: "legacy",
    svg: <Icons.MoneyLHDNIcon />,
  },
  {
    name: "mampu",
    type: "legacy",
    svg: <Icons.MAMPUIcon />,
  },
  {
    name: "socso-perkeso",
    type: "legacy",
    svg: <Icons.SOCSOPERKESOIcon />,
  },
  {
    name: "light-bulb-ipr-epu",
    type: "legacy",
    svg: <Icons.LightBulbIPREPUIcon />,
  },
  {
    name: "police-pdrm",
    type: "legacy",
    svg: <Icons.PolicePDRMIcon />,
  },
  {
    name: "helping-hand-icu-jpm",
    type: "legacy",
    svg: <Icons.HelpingHandICUJPMIcon />,
  },
  {
    name: "document-mof",
    type: "legacy",
    svg: <Icons.DocumentMOFIcon />,
  },

  // Without Round Shape or Borderless
  {
    name: "mini-phcorp",
    type: "legacy",
    svg: <Icons.MiniPhcorpIcon />,
  },
  {
    name: "mini-mampu",
    type: "legacy",
    svg: <Icons.MiniMAMPUIcon />,
  },
  {
    name: "mini-ribbon-ntrc",
    type: "legacy",
    svg: <Icons.MiniRibbonNTRCIcon />,
  },
  {
    name: "mini-bnm",
    type: "legacy",
    svg: <Icons.MiniBNMIcon />,
  },
  {
    name: "mini-dosm",
    type: "legacy",
    svg: <Icons.MiniDOSMIcon />,
  },
  {
    name: "mini-helmet-jpa",
    type: "legacy",
    svg: <Icons.MiniHelmetJPAIcon />,
  },
  {
    name: "mini-document-mof",
    type: "legacy",
    svg: <Icons.MiniDocumentMOFIcon />,
  },
  {
    name: "mini-train-mot",
    type: "legacy",
    svg: <Icons.MiniTrainMOTIcon />,
  },
  {
    name: "mini-ambulance-mers",
    type: "legacy",
    svg: <Icons.MiniAmbulanceMERSIcon />,
  },
  {
    name: "mini-hospital-moh",
    type: "legacy",
    svg: <Icons.MiniHospitalMOHIcon />,
  },
  {
    name: "mini-police-pdrm",
    type: "legacy",
    svg: <Icons.MiniPolicePDRMIcon />,
  },
  {
    name: "mini-weather-climate",
    type: "legacy",
    svg: <Icons.MiniWeatherClimateIcon />,
  },
  {
    name: "mini-fire-bomba",
    type: "legacy",
    svg: <Icons.MiniFireBOMBAIcon />,
  },
  {
    name: "mini-flood-warning",
    type: "legacy",
    svg: <Icons.MiniFloodWarningIcon />,
  },
  {
    name: "mini-light-bulb-ipr-epu",
    type: "legacy",
    svg: <Icons.MiniLightBulbIPREPUIcon />,
  },
  {
    name: "mini-helping-hands-icu-jpm",
    type: "legacy",
    svg: <Icons.MiniHelpingHandsICUJPMIcon />,
  },
  {
    name: "mini-money-kwap",
    type: "legacy",
    svg: <Icons.MiniMoneyKWAPIcon />,
  },
  {
    name: "mini-ballot-spr",
    type: "legacy",
    svg: <Icons.MiniBallotSPRIcon />,
  },
  {
    name: "mini-money-epf",
    type: "legacy",
    svg: <Icons.MiniMoneyEPFIcon />,
  },
  {
    name: "mini-book-moe",
    type: "legacy",
    svg: <Icons.MiniBookMOEIcon />,
  },
  {
    name: "mini-passport-imigresen",
    type: "legacy",
    svg: <Icons.MiniPassportImigresenIcon />,
  },
  {
    name: "mini-internet-mcmc",
    type: "legacy",
    svg: <Icons.MiniInternetMCMCIcon />,
  },
  {
    name: "mini-blood-pdn",
    type: "legacy",
    svg: <Icons.MiniBloodPDNIcon />,
  },
  {
    name: "mini-car-jpj",
    type: "legacy",
    svg: <Icons.MiniCarJPJIcon />,
  },
  {
    name: "mini-identity-jpn",
    type: "legacy",
    svg: <Icons.MiniIdentityJPNIcon />,
  },
  {
    name: "mini-socso",
    type: "legacy",
    svg: <Icons.MiniSOCSOIcon />,
  },
  {
    name: "mini-money-lhdn",
    type: "legacy",
    svg: <Icons.MiniMoneyLHDNIcon />,
  },
  {
    name: "mini-unhcr",
    type: "legacy",
    svg: <Icons.MiniUNHCRIcon />,
  },
  {
    name: "mini-jakoa",
    type: "legacy",
    svg: <Icons.MiniJAKOAIcon />,
  },
  {
    name: "mini-website",
    type: "legacy",
    svg: <Icons.MiniWebsiteIcon />,
  },
];
