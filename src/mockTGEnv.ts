import { mockTelegramEnv, retrieveLaunchParams, parseInitData } from "@tma.js/sdk";

const mockTelegramEnvironment = () => {
  if (import.meta.env.DEV) {
    let shouldMock: boolean = false;

    try {
      retrieveLaunchParams();

      shouldMock = !!sessionStorage.getItem("____mocked");
    } catch (err) {
      shouldMock = true;
    }

    if (shouldMock) {
      const initDataRaw = new URLSearchParams([
        [
          "user",
          JSON.stringify({
            id: 99281935,
            first_name: "Kingsley",
            last_name: "Victor",
            username: "spontaneous_engineer",
            language_code: "en",
            is_premium: true,
            allows_write_to_pm: true,
            photo_url: "https://randomuser.me/api/portraits/med/men/77.jpg",
          }),
        ],
        ["hash", "89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31"],
        ["auth_date", "1716922846"],
        ["start_param", "debug"],
        ["chat_type", "sender"],
        ["chat_instance", "8428209589180549439"],
      ]).toString();

      try {
        mockTelegramEnv({
          themeParams: {
            accentTextColor: "#6ab2f2",
            bgColor: "#17212b",
            buttonColor: "#5288c1",
            buttonTextColor: "#ffffff",
            destructiveTextColor: "#ec3942",
            headerBgColor: "#17212b",
            hintColor: "#708499",
            linkColor: "#6ab3f3",
            secondaryBgColor: "#232e3c",
            sectionBgColor: "#17212b",
            sectionHeaderTextColor: "#6ab3f3",
            subtitleTextColor: "#708499",
            textColor: "#f5f5f5",
          },
          initData: parseInitData(initDataRaw),
          initDataRaw,
          version: "7.2",
          platform: "tdesktop",
        });
      } catch (error) {
        console.error(error);
      }

      sessionStorage.setItem("____mocked", "1");
    }
  }
};

mockTelegramEnvironment();
