export interface CurrentCourse {
  name: string;
  code: string;
  type: "必修" | "選修";
  description: string;
  schedule: string;
  classroom: string;
  link: string;
  color: string;
  highlights: string[];
}

export interface HistoryCourseItem {
  name: string;
  code: string;
  type: "必修" | "選修";
  link: string;
}

export interface HistorySemester {
  year: string;
  semester: string;
  courses: HistoryCourseItem[];
}

export const currentCourses: CurrentCourse[] = [
  {
    name: "物聯網",
    code: "資工三",
    type: "選修",
    description:
      "探討物聯網技術與應用，包含感測器網路、無線通訊、雲端運算及實作專題。",
    schedule: "每週(二) 09:10 - 12:00",
    classroom: "資工電腦教室(二)",
    link: "",
    color: "from-violet-500 to-purple-500",
    highlights: ["感測器網路", "無線通訊", "雲端運算", "專題實作"],
  },
  {
    name: "電腦網路進階",
    code: "資工二",
    type: "選修",
    description:
      "深入探討電腦網路進階議題，包含網路安全、軟體定義網路、網路效能分析與最新協定發展。",
    schedule: "每週(四) 09:10 - 12:00",
    classroom: "資工電腦教室(一)",
    link: "",
    color: "from-blue-500 to-cyan-500",
    highlights: ["網路安全", "軟體定義網路", "效能分析", "進階協定"],
  },
];

export const courseHistory: HistorySemester[] = [
  {
    year: "114",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/114-1-nt.html",
      },
      {
        name: "物聯網",
        code: "資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/114-1-IoT.html",
      },
      {
        name: "書報討論",
        code: "人工智慧應用服務碩士在職專班一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/114-1 seminar.htm",
      },
      {
        name: "網路通訊專題(二)",
        code: "資工四",
        type: "必修",
        link: "https://webap0.ncue.edu.tw/DEANV2/UploadDEAN/SUBJECT/1141/54020_1EICS0024920.pdf",
      },
    ],
  },
  {
    year: "113",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/113-2-nt.html",
      },
      {
        name: "車載通訊技術",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/113-2-vehicle.html",
      },
    ],
  },
  {
    year: "113",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/113-1-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/113-1-IoT.html",
      },
    ],
  },
  {
    year: "112",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/112-1-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/112-1-IoT.html",
      },
    ],
  },
  {
    year: "111",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/111-2-nt.html",
      },
      {
        name: "車載通訊技術",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/111-2-vehicle.html",
      },
    ],
  },
  {
    year: "111",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/111-1-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/111-1-IoT.html",
      },
    ],
  },
  {
    year: "110",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/110-2-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/110-2-IoT.html",
      },
      {
        name: "書報討論",
        code: "資工碩一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/110-2%20seminar.htm",
      },
    ],
  },
  {
    year: "110",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/110-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/110-1-IoT.html",
      },
      {
        name: "書報討論",
        code: "資工碩一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/110-1%20seminar.htm",
      },
    ],
  },
  {
    year: "109",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/109-2-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/109-2-IoT.html",
      },
      {
        name: "書報討論",
        code: "資工碩一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/109-2%20seminar.htm",
      },
    ],
  },
  {
    year: "109",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/109-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/109-1-IoT.html",
      },
      {
        name: "書報討論",
        code: "資工碩一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/109-1%20seminar.htm",
      },
    ],
  },
  {
    year: "108",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/108-2-nt.html",
      },
      {
        name: "車載網路技術",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/108-2-vehicle.html",
      },
      {
        name: "書報討論",
        code: "資工碩一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/108-2%20seminar.htm",
      },
    ],
  },
  {
    year: "108",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/108-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/108-1-IoT.html",
      },
      {
        name: "書報討論",
        code: "資工碩一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/108-1%20seminar.htm",
      },
    ],
  },
  {
    year: "107",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/107-2-nt.html",
      },
      {
        name: "無線通訊網路",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/wireless/107-2-wireless.html",
      },
    ],
  },
  {
    year: "107",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/107-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/107-1-IoT.html",
      },
    ],
  },
  {
    year: "106",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/105-nt.html",
      },
      {
        name: "計算機概論",
        code: "資工一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/cs/106-1-cs.html",
      },
    ],
  },
  {
    year: "105",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/105-2-nt.html",
      },
      {
        name: "車載通訊技術",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/105-2-vehicle.html",
      },
    ],
  },
  {
    year: "105",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/105-nt.html",
      },
      {
        name: "物聯網",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/105-1-IoT.html",
      },
    ],
  },
  {
    year: "104",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/104-2-nt.html",
      },
      {
        name: "車載網路技術",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/104-2-vehicle.html",
      },
      {
        name: "進階書報討論",
        code: "資工碩二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/AdvSeminar/104-2-AdvSeminar.html",
      },
    ],
  },
  {
    year: "104",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/103-nt/104-nt.html",
      },
    ],
  },
  {
    year: "103",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/103-2-nt/103-2-nt.html",
      },
    ],
  },
  {
    year: "103",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/103-nt/103-nt.html",
      },
      {
        name: "行動計算",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/103-mobile/103-mobile.html",
      },
    ],
  },
  {
    year: "102",
    semester: "2",
    courses: [
      {
        name: "電腦網路進階",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/102-2-nt/102-2-nt.html",
      },
      {
        name: "車載網路技術",
        code: "資工三、資工碩一",
        type: "選修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/102-2-vehicle/102-2-vehicle.html",
      },
    ],
  },
  {
    year: "102",
    semester: "1",
    courses: [
      {
        name: "電腦網路",
        code: "資工二",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/102-nt/102-1-nt.html",
      },
      {
        name: "無線通訊網路",
        code: "資工三(網路學程必修)、資工碩一",
        type: "必修",
        link: "https://people.csie.ncue.edu.tw/icchang/course/102-wireless/102-wireless.html",
      },
    ],
  },
];
