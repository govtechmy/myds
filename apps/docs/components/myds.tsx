"use client";

import React, {
  useState,
  ComponentProps,
  FunctionComponent,
  forwardRef,
} from "react";
import { Button } from "@govtechmy/myds-react/button";
import { Toggle, ToggleThumb } from "./myds";
export * from "@govtechmy/myds-react/toggle";
export * from "@govtechmy/myds-react/button";
export * from "@govtechmy/myds-react/link";
export * from "@govtechmy/myds-react/skiplink";
export * from "@govtechmy/myds-react/accordion";
export * from "@govtechmy/myds-react/alert-dialog";
export * from "@govtechmy/myds-react/announce-bar";
export * from "@govtechmy/myds-react/toast";
export * from "@govtechmy/myds-react/callout";
export * from "@govtechmy/myds-react/breadcrumb";
export * from "@govtechmy/myds-react/checkbox";
export * from "@govtechmy/myds-react/label";
export * from "@govtechmy/myds-react/date-field";
export * from "@govtechmy/myds-react/date-picker";
export * from "@govtechmy/myds-react/daterange-picker";
export * from "@govtechmy/myds-react/dialog";
export * from "@govtechmy/myds-react/dropdown";
export * from "@govtechmy/myds-react/pill";
export * from "@govtechmy/myds-react/select";
export * from "@govtechmy/myds-react/input";
export * from "@govtechmy/myds-react/table";
export * from "@govtechmy/myds-react/data-table";
export * from "@govtechmy/myds-react/search-bar";
export * from "@govtechmy/myds-react/masthead";
export * from "@govtechmy/myds-react/radio";
export * from "@govtechmy/myds-react/input-otp";
export * from "@govtechmy/myds-react/tabs";
export * from "@govtechmy/myds-react/navbar";
export * from "@govtechmy/myds-react/summary-list";
export * from "@govtechmy/myds-react/theme-switch";
export { ThemeProvider } from "@govtechmy/myds-react/hooks";

import {
  Callout,
  CalloutTitle,
  CalloutContent,
  CalloutAction,
  CalloutClose,
} from "@govtechmy/myds-react/callout";
import { useToast } from "@govtechmy/myds-react/hooks";
import { DatePicker } from "@govtechmy/myds-react/date-picker";
import { DateRangePicker } from "@govtechmy/myds-react/daterange-picker";
import { Pill } from "@govtechmy/myds-react/pill";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@govtechmy/myds-react/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogClose,
} from "@govtechmy/myds-react/alert-dialog";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@govtechmy/myds-react/select";
import { Tag } from "@govtechmy/myds-react/tag";
import { Cell } from "@govtechmy/myds-react/data-table";
import {
  Masthead,
  MastheadHeader,
  MastheadContent,
  MastheadOfficialIndicator,
  MastheadToggle,
  MastheadSection,
  MastheadSectionTitle,
  MastheadSectionBody,
} from "@govtechmy/myds-react/masthead";
import { GovMyIcon, Lock2Icon, LockFillIcon } from "@govtechmy/myds-react/icon";
import {
  SummaryList,
  SummaryListAction,
  SummaryListBody,
  SummaryListDetail,
  SummaryListHeader,
  SummaryListRow,
  SummaryListTerm,
} from "@govtechmy/myds-react/summary-list";
import { SwapIcon } from "@govtechmy/myds-react/icon";
import {
  BrandLogo,
  Navbar,
  NavbarActionGroup,
  NavbarContainer,
  NavigationMenuCombo,
  NavItemsDropdown,
  NavItemsDropdownItems,
  NavItemsMenu,
} from "@govtechmy/myds-react/navbar";
import {
  GlobeIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@govtechmy/myds-react/icon";

interface PreviewButtonProps extends ComponentProps<typeof Button> {
  pantun: string;
}
interface ToastTriggerButtonProps extends ComponentProps<typeof Button> {
  toastVariant: "message" | "success" | "info" | "warning" | "error";
  text?: string;
}

export const PreviewButton: FunctionComponent<PreviewButtonProps> = (props) => {
  return <Button {...props} onClick={() => alert(props.pantun)} />;
};

export const ToastTriggerButton: FunctionComponent<ToastTriggerButtonProps> = (
  props,
) => {
  const { toast } = useToast();
  return (
    <Button
      {...props}
      onClick={() => {
        toast({
          variant: props.toastVariant,
          title: "Hello, world!",
          description: "this is a description",
        });
      }}
    >
      {props.text}
    </Button>
  );
};

interface DismissibleCalloutExampleProps {
  type: "basic" | "action";
  title?: string;
  description?: string;
}

export const DismissibleCalloutExample: FunctionComponent<
  DismissibleCalloutExampleProps
> = ({ type, title, description }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <Callout
      dismissible
      onDismiss={() => {
        alert("Action taken before callout gets dismissed");
        setShow(false);
        console.log("MYDS: Dismissed event captured!");
      }}
    >
      <CalloutTitle>{title}</CalloutTitle>
      <CalloutContent>{description}</CalloutContent>
      <CalloutAction>
        <CalloutClose>
          <Button variant="default-outline">Call to Action</Button>
        </CalloutClose>
      </CalloutAction>
    </Callout>
  ) : (
    <Button variant={"default-outline"} onClick={() => setShow(true)}>
      Show Callout: {type}
    </Button>
  );
};

interface PreviewToggleProps extends ComponentProps<typeof Toggle> {}

export const ControlledToggle: FunctionComponent<PreviewToggleProps> = (
  props,
) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>State: {isChecked ? "On" : "Off"}</p>
      <Toggle
        checked={isChecked}
        onCheckedChange={(checked) => setIsChecked(checked)}
        {...props}
      >
        <ToggleThumb />
      </Toggle>
    </div>
  );
};

const [NOW, YESTERDAY, TOMORROW] = [new Date(), new Date(), new Date()];
YESTERDAY.setDate(NOW.getDate() - 1);
TOMORROW.setDate(NOW.getDate() + 1);

export const CustomDisableDatePicker: FunctionComponent = () => {
  return (
    <DatePicker
      defaultValue={new Date()}
      disabled={(date) => date.getDate() === 13}
    />
  );
};

export const CustomDisableDateRangePicker: FunctionComponent = () => {
  return (
    <DateRangePicker
      defaultValue={{ from: YESTERDAY, to: TOMORROW }}
      disabled={(date) => date.getDate() === 13}
    />
  );
};

export { NOW, YESTERDAY, TOMORROW };

export const PillWithTrailingXButton: FunctionComponent<
  ComponentProps<typeof Pill>
> = (props) => {
  return <Pill onDismiss={() => alert("Dismissing pill...")} {...props} />;
};

export const DismissibleDialog: FunctionComponent = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="primary-fill">Dismissible + onDismiss Dialog</Button>
      </DialogTrigger>
      <DialogBody
        dismissible={true}
        onDismiss={() => alert("Dialog dismissed...")}
      >
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <DialogDescription>Dialog content goes here.</DialogDescription>
        </DialogContent>
        <DialogFooter>
          <DialogClose>
            <Button variant="default-outline">Secondary Action</Button>
          </DialogClose>
          <DialogClose>
            <Button variant="primary-fill">Primary Action</Button>
          </DialogClose>
        </DialogFooter>
      </DialogBody>
    </Dialog>
  );
};

export const DismissibleAlertDialog: FunctionComponent = () => {
  return (
    <AlertDialog variant="warning">
      <AlertDialogTrigger>
        <Button variant="primary-fill">
          Dismissible + onDismiss AlertDialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        dismissible={true}
        onDismiss={() => alert("AlertDialog dismissed...")}
      >
        <AlertDialogTitle>AlertDialog Title</AlertDialogTitle>
        <AlertDialogDescription>
          AlertDialog content goes here.
        </AlertDialogDescription>

        <AlertDialogAction>
          <AlertDialogClose>
            <Button variant="default-outline">Secondary Action</Button>
          </AlertDialogClose>
          <AlertDialogClose>
            <Button variant="primary-fill">Primary Action</Button>
          </AlertDialogClose>
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const CustomValueSelect: FunctionComponent = () => {
  return (
    <Select multiple size="small" variant="outline">
      <SelectTrigger>
        <SelectValue label="Fruit">
          {(value) => (
            <div className="flex gap-1">
              {Array.isArray(value)
                ? value.map((v) => <Pill>{v}</Pill>)
                : value}
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  );
};

export const DataTableData = [
  {
    age: 25,
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
  },
  {
    age: 30,
    id: 2,
    name: "Jane Doe",
    position: "Product Manager",
  },
  {
    age: 22,
    id: 3,
    name: "Alice",
    position: "Designer",
  },
  {
    age: 35,
    id: 4,
    name: "Bob 'With A Very Long Middle Name' Smith",
    position: "Software Engineer",
  },
  {
    age: 28,
    id: 5,
    name: "Charlie",
    position: "Data Scientist",
  },
];

export const DataTableNestedData = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    position: "Software Engineer",
    children: [
      {
        id: 11,
        name: "John Doe Jr.",
        age: 5,
        position: "Software Engineer",
        children: [
          {
            id: 111,
            name: "John Doe-raemon",
            age: 5,
            position: "Software Engineer",
          },
          {
            id: 112,
            name: "John 'Penat' Doe",
            age: 5,
            position: "Software Engineer",
          },
        ],
      },
      {
        id: 12,
        name: "John Doe Jr.",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
    position: "Product Manager",
    children: [
      {
        id: 21,
        name: "Jane Doe Jr. 1",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 22,
        name: "Jane Doe Jr. 2",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 3,
    name: "Alice",
    age: 22,
    position: "Designer",
    children: [
      {
        id: 31,
        name: "Alice Jr. 1",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 32,
        name: "Alice Jr. 2",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 4,
    name: "Bob",
    age: 35,
    position: "Software Engineer",
    children: [
      {
        id: 41,
        name: "Bob Jr. 1",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 42,
        name: "Bob Jr. 2",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
  {
    id: 5,
    name: "Charlie",
    age: 28,
    position: "Data Scientist",
    children: [
      {
        id: 51,
        name: "Charlie Jr. 1",
        age: 5,
        position: "Software Engineer",
      },
      {
        id: 52,
        name: "Charlie Jr. 2",
        age: 5,
        position: "Software Engineer",
      },
    ],
  },
];

export const DataTableColumns = [
  {
    accessorKey: "name",
    header: "Name",
    id: "name",
    meta: {
      expandable: true,
    },
  },
  {
    accessorKey: "age",
    header: "Age",
    id: "age",
    meta: {
      expandable: false,
      tooltip: "Age of the employee",
    },
  },
  {
    accessorKey: "position",
    header: "Position",
    id: "position",
    meta: {
      expandable: true,
      sortable: true,
      tooltip: "Position of the employee",
    },
  },
  {
    cell: () => {
      return (
        <Tag variant="success" size={"small"} mode="pill">
          Success
        </Tag>
      );
    },
    header: "Status",
    id: "status",
  },
  {
    cell: () => {
      return <Button variant="default-outline">Edit</Button>;
    },
    header: "Action",
    id: "action",
  },
];

export const DataTableFooterColumns = [
  {
    accessorKey: "name",
    header: "Name",
    id: "name",
    meta: {
      expandable: true,
    },
    footer: ({ table }: any) => `No. of Employees: ${table.getRowCount()}`,
  },
  {
    accessorKey: "age",
    header: "Age",
    id: "age",
    meta: {
      expandable: false,
      tooltip: "Age of the employee",
    },
  },
  {
    accessorKey: "position",
    header: "Position",
    id: "position",
    meta: {
      expandable: true,
      sortable: true,
      tooltip: "Position of the employee",
    },
  },
  {
    cell: () => {
      return (
        <Tag variant="success" size={"small"} mode="pill">
          Success
        </Tag>
      );
    },
    header: "Status",
    id: "status",
  },
  {
    cell: () => {
      return <Button variant="default-outline">Edit</Button>;
    },
    header: "Action",
    id: "action",
  },
];
export const DataTableNestedColumns = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    size: 180,
    meta: {
      expandable: true,
    },
    cell: Cell.Expand,
  },
  {
    id: "age",
    header: "Age",
    accessorKey: "age",
    meta: {
      expandable: false,
    },
  },
  {
    id: "position",
    header: "Position",
    accessorKey: "position",
    meta: {
      expandable: true,
    },
  },
  {
    id: "status",
    header: "Status",
    cell: () => {
      return (
        <Tag variant="success" size={"small"} mode="pill">
          Success
        </Tag>
      );
    },
  },
  {
    id: "action",
    header: "Action",
    cell: () => {
      return <Button variant="default-outline">Edit</Button>;
    },
  },
];
export const DataTableGroupedColumns = [
  {
    id: "employee",
    header: "Employee",
    columns: [
      {
        id: "name",
        header: "Name",
        accessorKey: "name",
        size: 180,
        meta: {
          expandable: true,
        },
      },
      {
        id: "age",
        header: "Age",
        accessorKey: "age",

        meta: {
          expandable: false,
        },
      },
      {
        id: "position",
        header: "Position",
        accessorKey: "position",
        meta: {
          expandable: true,
        },
      },
    ],
  },
  {
    id: "status",
    header: "Application",
    columns: [
      {
        id: "status",
        header: "Status",
        cell: () => {
          return (
            <Tag variant="success" size={"small"} mode="pill">
              Success
            </Tag>
          );
        },
      },
      {
        id: "action",
        header: "Action",
        cell: () => {
          return <Button variant="default-outline">Edit</Button>;
        },
      },
    ],
  },
];

export const DataTableCheckbox = {
  mode: "checkbox",
  onSelectionChange: (id: string) => {
    console.log("Selected Rows: ", id);
  },
  rowId: "id",
};
export const DataTableRadio = {
  mode: "radio",
  onSelectionChange: (id: string) => {
    console.log("Selected Rows: ", id);
  },
  rowId: "id",
};

interface PreviewMastheadProps extends ComponentProps<typeof Masthead> {}

export const PreviewMasthead: FunctionComponent<PreviewMastheadProps> = (
  props,
) => {
  return (
    <div className="not-prose">
      <Masthead>
        <MastheadHeader>
          <MastheadOfficialIndicator>
            Official Malaysia Government Website
          </MastheadOfficialIndicator>
          <MastheadToggle>Here's how you know</MastheadToggle>
        </MastheadHeader>
        <MastheadContent>
          <MastheadSection icon={<GovMyIcon />}>
            <MastheadSectionTitle>
              Official government websites end with .gov.my
            </MastheadSectionTitle>
            <MastheadSectionBody>
              If the link does not end with
              <span className="font-semibold"> .gov.my</span>, exit the website
              immediately even if it looks similar.
            </MastheadSectionBody>
          </MastheadSection>
          <MastheadSection icon={<Lock2Icon height={24} width={24} />}>
            <MastheadSectionTitle>
              Secure websites use HTTPS
            </MastheadSectionTitle>
            <MastheadSectionBody>
              Look for a lock (
              <LockFillIcon className="mb-0.5 inline size-3.5" />) atau
              <span className="font-semibold"> https:// </span>
              as an added precaution. If not present, do not share any sensitive
              information.
            </MastheadSectionBody>
          </MastheadSection>
        </MastheadContent>
      </Masthead>
    </div>
  );
};

export const PreviewMastheadContent: FunctionComponent<PreviewMastheadProps> = (
  props,
) => {
  return (
    <div className="not-prose">
      <MastheadContent>
        <MastheadSection icon={<GovMyIcon />}>
          <MastheadSectionTitle>
            Official government websites end with .gov.my
          </MastheadSectionTitle>
          <MastheadSectionBody>
            If the link does not end with
            <span className="font-semibold"> .gov.my</span>, exit the website
            immediately even if it looks similar.
          </MastheadSectionBody>
        </MastheadSection>
        <MastheadSection icon={<Lock2Icon height={24} width={24} />}>
          <MastheadSectionTitle>Secure websites use HTTPS</MastheadSectionTitle>
          <MastheadSectionBody>
            Look for a lock (
            <LockFillIcon className="mb-0.5 inline size-3.5" />) atau
            <span className="font-semibold"> https:// </span>
            as an added precaution. If not present, do not share any sensitive
            information.
          </MastheadSectionBody>
        </MastheadSection>
      </MastheadContent>
    </div>
  );
};

export const PreviewMastheadHeader: FunctionComponent<PreviewMastheadProps> = (
  props,
) => {
  return (
    <div className="not-prose">
      <MastheadHeader>
        <MastheadOfficialIndicator>
          Official Malaysia Government Website
        </MastheadOfficialIndicator>
        <MastheadToggle>Here's how you know</MastheadToggle>
      </MastheadHeader>
    </div>
  );
};

interface PreviewSummaryList extends ComponentProps<typeof SummaryList> {}

export const PreviewSummaryList: FunctionComponent<PreviewSummaryList> = (
  props,
) => {
  return (
    <SummaryList>
      <SummaryListHeader>Government Subsidy Application</SummaryListHeader>

      <SummaryListBody>
        <SummaryListRow>
          <SummaryListTerm>Application ID</SummaryListTerm>
          <SummaryListDetail>SUB12345</SummaryListDetail>
          <SummaryListAction></SummaryListAction>
        </SummaryListRow>

        <SummaryListRow>
          <SummaryListTerm>Applicant Name</SummaryListTerm>
          <SummaryListDetail>Lee Ming Wei</SummaryListDetail>
          <SummaryListAction></SummaryListAction>
        </SummaryListRow>

        <SummaryListRow>
          <SummaryListTerm>Submission Date</SummaryListTerm>
          <SummaryListDetail>15/10/2024 17:35:00</SummaryListDetail>
          <SummaryListAction></SummaryListAction>
        </SummaryListRow>

        <SummaryListRow>
          <SummaryListTerm>Subsidy Type</SummaryListTerm>
          <SummaryListDetail>Petrol Subsidy</SummaryListDetail>
          <SummaryListAction></SummaryListAction>
        </SummaryListRow>

        <SummaryListRow>
          <SummaryListTerm>Status</SummaryListTerm>
          <SummaryListDetail className="py-2">
            <Tag
              variant="warning"
              size={"medium"}
              className="h-fit"
              mode={"default"}
            >
              Pending
            </Tag>
          </SummaryListDetail>
          <SummaryListAction>
            <Button variant="primary-ghost" className="h-8">
              <SwapIcon /> Refresh
            </Button>
          </SummaryListAction>
        </SummaryListRow>

        <SummaryListRow>
          <SummaryListTerm>Document Submitted</SummaryListTerm>
          <SummaryListDetail>
            <div>Proof Of Income</div>
            <div>ID Copy</div>
          </SummaryListDetail>
          <SummaryListAction>
            <Button variant="primary-ghost" className="h-8">
              Add More
            </Button>
          </SummaryListAction>
        </SummaryListRow>

        <SummaryListRow>
          <SummaryListTerm>Expected Response Date</SummaryListTerm>
          <SummaryListDetail>23/03/2023 17:35:00</SummaryListDetail>
          <SummaryListAction></SummaryListAction>
        </SummaryListRow>
      </SummaryListBody>
    </SummaryList>
  );
};

export const PreviewSummaryListAction: FunctionComponent<PreviewSummaryList> = (
  props,
) => {
  return (
    <div className="not-prose w-[660px]">
      <Button variant="primary-ghost" className="h-8">
        <SwapIcon /> Refresh
      </Button>
    </div>
  );
};

import {
  AutoPagination,
  AutoPaginationProps,
} from "@govtechmy/myds-react/pagination";

export const SimplePagination = forwardRef<HTMLElement, AutoPaginationProps>(
  (props, ref) => {
    return (
      <AutoPagination
        {...props}
        ref={ref}
        onPageChange={(page) => console.log(page)}
      />
    );
  },
);
SimplePagination.displayName = "SimplePagination";

interface PreviewNavbarProps extends ComponentProps<typeof Navbar> {}

export const PreviewNavbar: FunctionComponent<PreviewNavbarProps> = (props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [value, setValue] = React.useState("EN");
  const [showMenu, setMenu] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar showMenu={showMenu} className="px-2">
      <NavbarContainer>
        <BrandLogo imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg">
          MYDS
        </BrandLogo>

        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          <NavItemsMenu href="/menu1" active={false}>
            Menu 1
          </NavItemsMenu>
          <NavItemsMenu href="/menu2" active={false}>
            Menu 2
          </NavItemsMenu>

          <NavItemsDropdown menu="Menu Dropdown">
            <NavItemsDropdownItems href="/submenu1">
              Submenu 1
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu2">
              Submenu 2
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu3">
              Submenu 3
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu1">
              Submenu 4
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu2">
              Submenu 5
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu3">
              Submenu 6
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu3">
              Submenu 7
            </NavItemsDropdownItems>
          </NavItemsDropdown>

          <NavItemsMenu href="/menu3" active={false}>
            Menu 3
          </NavItemsMenu>
        </NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        {/* Button Search  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2">
          <SearchIcon></SearchIcon>
        </Button>

        {/* Button Light Mode Toggle  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2" onClick={handleToggle}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>

        {/* Select Language Toggle  : mobile hide if needed  */}
        <div className="hidden sm:block">
          <Select
            value={value}
            onValueChange={setValue}
            defaultValue="EN"
            multiple={false}
            variant="outline"
            size="medium"
          >
            <SelectTrigger>
              <GlobeIcon className="h-4 w-4"></GlobeIcon>
              <SelectValue>{(value) => value || "EN"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="font-body rounded-[4px] py-1">
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="BM">BM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </NavbarActionGroup>
    </Navbar>
  );
};

interface PreviewBrandLogoProps extends ComponentProps<typeof BrandLogo> {}

export const PreviewBrandLogo: FunctionComponent<PreviewBrandLogoProps> = (
  props,
) => {
  return (
    <BrandLogo
      imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
      href="/"
    >
      MYDS
    </BrandLogo>
  );
};

export const PreviewNavItemsMenu: FunctionComponent<PreviewNavbarProps> = (
  props,
) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [value, setValue] = React.useState("EN");
  const [showMenu, setMenu] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar showMenu={showMenu} className="px-2">
      <NavbarContainer>
        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          <NavItemsMenu href="/menu1" active={false}>
            Menu 1
          </NavItemsMenu>
          <NavItemsMenu href="/menu2" active={false}>
            Menu 2
          </NavItemsMenu>

          <NavItemsDropdown menu="Menu Dropdown">
            <NavItemsDropdownItems href="/submenu1">
              Submenu 1
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu2">
              Submenu 2
            </NavItemsDropdownItems>
            <NavItemsDropdownItems href="/submenu3">
              Submenu 3
            </NavItemsDropdownItems>
          </NavItemsDropdown>

          <NavItemsMenu href="/menu3" active={false}>
            Menu 3
          </NavItemsMenu>
        </NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        <div className="block h-10 w-[200px] lg:hidden"></div>
      </NavbarActionGroup>
    </Navbar>
  );
};

export const PreviewActionGroup: FunctionComponent<PreviewNavbarProps> = (
  props,
) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [value, setValue] = React.useState("EN");
  const [showMenu, setMenu] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar showMenu={showMenu} className="px-2">
      <NavbarContainer></NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        {/* Button Search  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2">
          <SearchIcon></SearchIcon>
        </Button>

        {/* Button Light Mode Toggle  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2" onClick={handleToggle}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>

        {/* Select Language Toggle  : mobile hide if needed  */}
        <div className="hidden sm:block">
          <Select
            value={value}
            onValueChange={setValue}
            defaultValue="EN"
            multiple={false}
            variant="outline"
            size="medium"
          >
            <SelectTrigger>
              <GlobeIcon className="h-4 w-4"></GlobeIcon>
              <SelectValue>{(value) => value || "EN"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="font-body rounded-[4px] py-1">
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="BM">BM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </NavbarActionGroup>
    </Navbar>
  );
};

import {
  Pagination,
  PaginationContext,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationNumber,
  PaginationPrevious,
} from "@govtechmy/myds-react/pagination";
import { usePagination } from "@govtechmy/myds-react/hooks";

export const SelfPagination = ({ count = 200, limit = 10, page = 1 }) => {
  // const count = 200;
  // const limit = 10;
  // const page = 1;
  const { visiblePages, max } = usePagination({ count, limit, page });
  const pageFn = (page: number) => console.log(page);

  return (
    <Pagination
      count={count}
      limit={limit}
      page={page}
      onPageChange={pageFn}
      type="default"
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => pageFn(page - 1)} />
        </PaginationItem>

        {visiblePages.map((pageNum, index) => (
          <PaginationItem key={index}>
            {pageNum === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationNumber number={pageNum as number} />
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext onClick={() => pageFn(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
SelfPagination.displayName = "SelfPagination";
