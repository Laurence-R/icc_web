// 研究計畫資料

export interface Project {
  id: number;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  agency: string;
  projectNumber: string;
  budget?: number;
  status: "執行中" | "已結案";
  type: "主持計畫" | "共同主持人" | "授課教師" | "分項主持人" | "指導專題";
}

// 執行中及已結案研究計畫
export const mainProjects: Project[] = [
  {
    id: 1,
    name: "車聯網上基於自注意力機制之元強化學習多任務卸載策略",
    role: "主持人",
    startDate: "2025/08",
    endDate: "2026/07",
    agency: "行政院國科會",
    projectNumber: "NSTC 114-2221-E-018-020-",
    budget: 830000,
    status: "執行中",
    type: "主持計畫"
  },
  {
    id: 2,
    name: "一個車聯網之軟體定義路由平台:以整合深度/元強化學習與隨機森林的策略來處理車輛歷史軌跡與即時資訊",
    role: "主持人",
    startDate: "2023/08",
    endDate: "2024/07",
    agency: "行政院國科會",
    projectNumber: "NSTC 112-2221-E-018-009",
    budget: 690000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 3,
    name: "智慧晶片系統與應用課程推廣計畫",
    role: "共同主持人",
    startDate: "2022/08",
    endDate: "2023/07",
    agency: "教育部",
    projectNumber: "6062",
    budget: 1477778,
    status: "已結案",
    type: "共同主持人"
  },
  {
    id: 4,
    name: "智慧晶片應用與聯網技術課程",
    role: "共同主持人",
    startDate: "2021/08",
    endDate: "2022/06",
    agency: "教育部",
    projectNumber: "5450",
    budget: 1234442,
    status: "已結案",
    type: "共同主持人"
  },
  {
    id: 5,
    name: "風速感知的軟體定義飛行網路中以強化學習恢復斷裂無人機連結的3R演算法",
    role: "主持人",
    startDate: "2021/08",
    endDate: "2022/07",
    agency: "行政院科技部",
    projectNumber: "MOST 110-2221-E-018-002-",
    budget: 660000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 6,
    name: "智慧聯網技術課程推廣計畫",
    role: "共同主持人",
    startDate: "2020/08",
    endDate: "2021/06",
    agency: "教育部",
    projectNumber: "4643",
    budget: 1300000,
    status: "已結案",
    type: "共同主持人"
  },
  {
    id: 7,
    name: "新工程教育計畫",
    role: "授課教師",
    startDate: "2019/05",
    endDate: "2021/01",
    agency: "教育部",
    projectNumber: "3752",
    status: "已結案",
    type: "授課教師"
  },
  {
    id: 8,
    name: "運用強化學習來尋找車載網路路由路徑",
    role: "主持人",
    startDate: "2020/08",
    endDate: "2021/07",
    agency: "行政院科技部",
    projectNumber: "MOST 109-2221-E-018-017-",
    budget: 740000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 9,
    name: "運用貝氏推論改進強化學習的次世代車聯網",
    role: "主持人",
    startDate: "2019/08",
    endDate: "2020/07",
    agency: "行政院科技部",
    projectNumber: "MOST 108-2221-E-018-005-",
    budget: 600000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 10,
    name: "車輛網路上以軌跡與網路編碼為基礎的多點路由協定",
    role: "主持人",
    startDate: "2017/08",
    endDate: "2018/07",
    agency: "行政院科技部",
    projectNumber: "MOST 106-2221-E-018-008",
    budget: 550000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 11,
    name: "車載隨意行動網路中一個擁有社會意識以軌跡為基礎的路由協定",
    role: "主持人",
    startDate: "2016/08",
    endDate: "2017/07",
    agency: "行政院科技部",
    projectNumber: "MOST 105-2221-E-018-012-",
    budget: 649000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 12,
    name: "基於車載網路分享車輛資訊的動態車輛共乘系統之設計",
    role: "主持人",
    startDate: "2015/08",
    endDate: "2016/07",
    agency: "行政院科技部",
    projectNumber: "MOST 104-2221-E-018-003-",
    budget: 609000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 13,
    name: "車輛延遲容忍網路下基於軌跡預測的高效率資料轉傳協定",
    role: "主持人",
    startDate: "2014/08",
    endDate: "2015/07",
    agency: "行政院科技部",
    projectNumber: "MOST103-2221-E-018-028",
    budget: 589000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 14,
    name: "SocialCode: 車輛網路上一個以信用為基礎,激勵不同自私與興趣程度的車輛節點使用網路編碼於合作式內容分享的協定",
    role: "主持人",
    startDate: "2013/08",
    endDate: "2014/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NCS102-2221-E-018-017-",
    budget: 577000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 15,
    name: "IG-Ferry: 車輛延遲容忍網路上一個以副本為基礎的高效率路由協定",
    role: "主持人",
    startDate: "2012/08",
    endDate: "2013/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC101-2221-E-018-006-",
    budget: 632000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 16,
    name: "使用歷史與即時交通資訊之高效率車輛網路單點路由",
    role: "主持人",
    startDate: "2011/08",
    endDate: "2012/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC100-2221-E-018-018-",
    budget: 531000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 17,
    name: "反應式 FHCOP-B 快速換手的流程最佳化與效能分析",
    role: "主持人",
    startDate: "2010/08",
    endDate: "2011/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC99-2221-E-018-017-",
    budget: 531000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 18,
    name: "巢狀式行動網路下主動式與反應式 FHCOP-B 快速換手的架構設計與效能分析",
    role: "主持人",
    startDate: "2009/08",
    endDate: "2010/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC98-2221-E-018-010-",
    budget: 612000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 19,
    name: "98年度資通訊課程推廣計畫",
    role: "授課教師",
    startDate: "2009/02",
    endDate: "2010/01",
    agency: "教育部",
    projectNumber: "台顧字第0980061763A號",
    budget: 267425,
    status: "已結案",
    type: "授課教師"
  },
  {
    id: 20,
    name: "巢狀式行動網路下整合SIP、HCoP-B與第二層快速換手的跨層架構設計",
    role: "主持人",
    startDate: "2008/08",
    endDate: "2009/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC97-2221-E-018-013-",
    budget: 623000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 21,
    name: "96-97年度資通訊課程推廣計畫",
    role: "主持人",
    startDate: "2007/12",
    endDate: "2009/01",
    agency: "教育部",
    projectNumber: "台顧字第0960205468A號",
    budget: 750000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 22,
    name: "巢狀式行動網路下的無縫式換手與多點群播研究",
    role: "主持人",
    startDate: "2007/08",
    endDate: "2008/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC96-2221-E-018-009",
    budget: 623000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 23,
    name: "支援路由最佳化、快速換手與多點傳送之階層式巢狀無線行動網路架構",
    role: "主持人",
    startDate: "2006/08",
    endDate: "2007/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC95-2221-E-018-013",
    budget: 511000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 24,
    name: "通訊科技人才培育先導型計畫特定課程補助",
    role: "主持人",
    startDate: "2006/09",
    endDate: "2006/12",
    agency: "教育部",
    projectNumber: "台顧字第0950130909號",
    budget: 84000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 25,
    name: "第四代異質性無線網路下之階層式多媒體多點傳送同步架構",
    role: "主持人",
    startDate: "2005/08",
    endDate: "2006/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC94-2213-E018-016",
    budget: 536000,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 26,
    name: "異質性無線網路上支援多媒體快速換手的階層式多點傳送SIP 協定",
    role: "主持人",
    startDate: "2004/08",
    endDate: "2005/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC93-2213-E018-008",
    budget: 617600,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 27,
    name: "異質性無線網路上多媒體服務品質之確保",
    role: "主持人",
    startDate: "2003/08",
    endDate: "2004/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC92-2213-E-018-015",
    budget: 610300,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 28,
    name: "中部科學園區推動計畫: 安全異質性接取網路之服務與應用",
    role: "分項主持人",
    startDate: "2002/12",
    endDate: "2003/12",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC 91-2218-E-324-003",
    budget: 3643300,
    status: "已結案",
    type: "分項主持人"
  },
  {
    id: 29,
    name: "整合多媒體伺服器、代理伺服器與無線行動用戶的即時多媒體 SMIL預載與排程架構",
    role: "主持人",
    startDate: "2002/08",
    endDate: "2003/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC91-2213-E-324-022",
    budget: 504400,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 30,
    name: "支援SMIL多媒體即時同步遠距教學的動態網路調配平台與實作",
    role: "主持人",
    startDate: "2001/08",
    endDate: "2002/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC 90-2213-E-324-019",
    budget: 481600,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 31,
    name: "以SMIL為基礎的多媒體即時同步遠距教學",
    role: "主持人",
    startDate: "2000/08",
    endDate: "2001/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC 89-2218-E-324-003-",
    budget: 414400,
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 32,
    name: "遠距教學環境中之多媒體即時同步資料流伺服器的研發",
    role: "主持人",
    startDate: "1999/08",
    endDate: "2000/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC 89-2213-E-324-008",
    status: "已結案",
    type: "主持計畫"
  },
  {
    id: 33,
    name: "應用於遠距教學中之全球資訊網多媒體同步技術的研發",
    role: "主持人",
    startDate: "1998/08",
    endDate: "1999/07",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC88-2213-E-324-019",
    budget: 333900,
    status: "已結案",
    type: "主持計畫"
  }
];

// 大專生專題計畫
export const studentProjects: Project[] = [
  {
    id: 101,
    name: "結合人工智慧與鏡頭光學以單目影像實現自動駕駛的數位孿生",
    role: "指導教授",
    startDate: "2025/07",
    endDate: "2026/02",
    agency: "行政院國家科學委員會",
    projectNumber: "114-2813-C-018-022-E",
    status: "執行中",
    type: "指導專題"
  },
  {
    id: 102,
    name: "結合雲端運算與人工智慧影像辨識的快速無人機階層式搜尋系統",
    role: "指導教授",
    startDate: "2022/07",
    endDate: "2023/02",
    agency: "行政院科技部",
    projectNumber: "111-2813-C-018-015-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 103,
    name: "以人工智慧辨識機車進入大車盲點之預警系統",
    role: "指導教授",
    startDate: "2019/07",
    endDate: "2020/02",
    agency: "行政院科技部",
    projectNumber: "108-2813-C-018-009-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 104,
    name: "汽車共乘之配對方法",
    role: "指導教授",
    startDate: "2013/07",
    endDate: "2014/02",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC102-2815-C-018-011-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 105,
    name: "基於即時路況收集交換動態節能路徑規劃演算法設計與 Android 平台上的實作",
    role: "指導教授",
    startDate: "2012/07",
    endDate: "2013/02",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC101-2815-C-018-018-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 106,
    name: "修改 NEPL程式,實作出HCoP-B 架構",
    role: "指導教授",
    startDate: "2009/07",
    endDate: "2010/02",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC98-2815-C-018-008-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 107,
    name: "使用行動通訊裝置建構校園互動式多媒體資訊系統",
    role: "指導教授",
    startDate: "2003/07",
    endDate: "2004/02",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC92-2815-C-324-013-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 108,
    name: "在無線網路 PDA上之 SMIL 即時學習系統",
    role: "指導教授",
    startDate: "2002/07",
    endDate: "2003/02",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC91-2815-C-324-021-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 109,
    name: "PDA上SMIL多媒體無線通訊系統的開發與研究",
    role: "指導教授",
    startDate: "2001/07",
    endDate: "2002/02",
    agency: "行政院國家科學委員會",
    projectNumber: "NSC90-2815-C-324-026-E",
    status: "已結案",
    type: "指導專題"
  },
  {
    id: 110,
    name: "網際網路上「多媒體」「即時」遠距教學系統之研發",
    role: "指導教授",
    startDate: "1998/11",
    endDate: "1999/06",
    agency: "行政院國家科學委員會",
    projectNumber: "",
    status: "已結案",
    type: "指導專題"
  }
];

export const allProjects = [
  ...mainProjects,
  ...studentProjects
];
