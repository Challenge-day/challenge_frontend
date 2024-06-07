export const TabListSx = {

  minHeight: "20px",

  "& .MuiTabs-indicator": { display: "none" },
  "& .MuiTab-root": {
    textTransform: 'none',
    color: "var(--Gray-400)",
    fontSize: "12px",
    lineHeight: "150%",
    fontWeight: "500",
    borderRadius: "16px",
    fontFamily: "Montserrat",
    minHeight: "18px",

    '&::first-letter': {
      textTransform: 'capitalize',
    },
  },
  "& .MuiTab-root:hover": {
    backgroundColor: "var(--blue-200)",
  },

  "& .MuiTouchRipple-root": {
    color: "var(--blue-200)",
  },

}

export const BoxTabsSx = {
  display: "flex",
  padding: "20px 0",

}

export const TabMainSx = {
  padding: "5px 14px",
  minWidth: "30px",
  color: "var(--Gray-400)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
}
export const TabMainingSx = {
  padding: "5px 15px",
  minWidth: "72px",
  color: "var(--Gray-400)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
}

export const TabTasksSx = {
  padding: "5px 15px",
  minWidth: "34px",
  color: "var(--Gray-400)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
}
export const TabFriendsSx = {
  padding: "5px 14px",
  minWidth: "46px",
  color: "var(--Gray-400)",
  "&.Mui-selected": {
    backgroundColor: "var(--blue-200)",
    color: "var(--content-bg)",
  },
}