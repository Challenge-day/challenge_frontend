export const TabListSx = {
  minHeight: "20px",

  "& .MuiTabs-indicator": { display: "none" },
  "& .MuiTab-root": {
    textTransform: "none",
    "&::first-letter": {
      textTransform: "capitalize",
    },
    color: "var(--black-100)",
    fontSize: "14px",
    lineHeight: "150%",

    fontWeight: "500",
    borderRadius: "16px",
  },
  "& .MuiTab-root:hover": {
    backgroundColor: "var(--blue-200)",
  },

  "& .MuiTouchRipple-root": {
    color: "var(--blue-200)",
  },
};

export const BoxTabsSx = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 0",
};

export const TabMainSx = {
  padding: "5px 10px",
  minWidth: "30px",
  minHeight: "18px",
  color: "var(--black-100)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
};
export const TabMainingSx = {
  padding: "5px 15px",
  minWidth: "72px",
  minHeight: "18px",
  color: "var(--black-100)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
};

export const TabTasksSx = {
  padding: "5px 15px",
  minWidth: "34px",
  minHeight: "18px",
  color: "var(--black-100)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
};
export const TabFriendsSx = {
  padding: "5px 15px",
  minWidth: "46px",
  minHeight: "18px",
  color: "var(--black-100)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
};
