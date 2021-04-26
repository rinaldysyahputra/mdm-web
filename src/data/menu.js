import { faComment, faCog } from "@fortawesome/free-solid-svg-icons";

export default [
  {
    company: "siloam jakarta barat",
    company_id: 1,
    list_menu: [
      {
        parent: "drugs",
        parent_icon: faCog,
        child: [
          {
            child_name: "create drugs",
            child_url: "/drugs/create",
            child_icon: faComment,
          },
          {
            child_name: "edit drugs",
            child_url: "/drugs/edit",
            child_icon: faComment,
          },
        ],
      },
      {
        parent: "non stock item",
        parent_icon: faCog,
        child: [
          {
            child_name: "create non stock",
            child_url: "/nonstock/create",
            child_icon: faComment,
          },
        ],
      },
      {
        parent: "administrator",
        parent_icon: faCog,
        child: [
          {
            child_name: "create workflow",
            child_url: "/admin/create",
            child_icon: faComment,
          },
        ],
      },
    ],
  },
  {
    company: "siloam bsd",
    company_id: 2,
    list_menu: [
      {
        parent: "drugs",
        parent_icon: faCog,
        child: [
          {
            child_name: "create drugs",
            child_url: "/drugs/create",
            child_icon: faComment,
          },
          {
            child_name: "edit drugs",
            child_url: "/drugs/edit",
            child_icon: faComment,
          },
        ],
      },
     
    ],
  },
];
