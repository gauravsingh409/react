import { Android, Bell, CaretDown, Check, CheckCircle, Clockwise, Command, CounterClockwise, Crown, DownloadSimple, Gear, HardDrives, Info, Iphone, Lightning, Macbook, MagicWand, MapPin, PlugsConnected, Prohibit, PuzzlePiece, Question, RocketLunch, Shield, SignOut, Sparkle, Stack, StarFour, Users, UsersThree } from "./category";
import { Building, CreditCard, Ticket } from "./category/CommerceIcon";
import { Chat, ChatCenteredDots, Envelope, Phone } from "./category/CommunicationIcons";
import { Database } from "./category/DevelopmentIcon";
import { ChartLineUp, Plus, X } from "./category/MathFinanceIcons";
import { FadersHorizontal, PauseCircle } from "./category/MediaIcons";
import { Files, FileText } from "./category/OfficeEditingIcons";

export const ICONS = {

    // Design Icons
    magicWand: MagicWand,
    stack: Stack,

    // Arrows
    counterClockwise: CounterClockwise,
    clockwise: Clockwise,
    caretDown: CaretDown,

    // People
    users: Users,
    usersThree: UsersThree,

    // Weather Nature Icons
    starFour: StarFour,
    sparkle: Sparkle,

    // Map Travel Icons
    rocketLunch: RocketLunch,
    mapPin: MapPin,

    // Games Icons
    crown: Crown,
    puzzlePiece: PuzzlePiece,

    // System & Device Icons
    command: Command,
    bell: Bell,
    gear: Gear,
    hardDrives: HardDrives,
    checkCircle: CheckCircle,
    downloadSimple: DownloadSimple,
    signout: SignOut,
    plugsConnected: PlugsConnected,
    check: Check,
    lightning: Lightning,

    // Commerce Icons
    creditCard: CreditCard,
    ticket: Ticket,
    building: Building,

    // Communication Icons
    chatCenteredDots: ChatCenteredDots,
    chat: Chat,
    phone: Phone,
    envelope: Envelope,

    // Math & Finance Icon
    chartLineUp: ChartLineUp,
    x: X,
    plus: Plus,

    // Security & Warning
    question: Question,
    info: Info,
    prohibit: Prohibit,
    shield: Shield,

    // Media Icons
    fadersHorizontal: FadersHorizontal,
    pauseCircle: PauseCircle,

    // Device Icon
    iphone: Iphone,
    macbook: Macbook,
    android: Android,

    // Office Editing Icons
    fileText: FileText,
    files: Files,

    // Development Icons
    database: Database,
};

export type IconName = keyof typeof ICONS;
