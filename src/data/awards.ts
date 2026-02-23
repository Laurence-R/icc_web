// 榮譽與獎項資料

export interface Award {
  id: number;
  title: string;
  year: number;
  organization: string;
  category: "個人獎項" | "指導學生獎項" | "最佳論文獎";
  description?: string;
}

// 個人獎項
export const personalAwards: Award[] = [
  {
    id: 1,
    title: "Marquis Who's Who in the World 2008",
    year: 2008,
    organization: "Marquis Who's Who",
    category: "個人獎項"
  },
  {
    id: 2,
    title: "國科會八十七學年度甲種研究獎勵",
    year: 1998,
    organization: "行政院國家科學委員會",
    category: "個人獎項"
  },
  {
    id: 3,
    title: "朝陽科技大學八十八學年度推動學術研究與建教合作獎狀",
    year: 1999,
    organization: "朝陽科技大學",
    category: "個人獎項",
    description: "八八獎字八八00二三號"
  },
  {
    id: 4,
    title: "朝陽科技大學八十七學年度研究優良獎",
    year: 1998,
    organization: "朝陽科技大學",
    category: "個人獎項",
    description: "八七獎字八七0 一號"
  },
  {
    id: 5,
    title: "朝陽科技大學八十七學年度論文佳作獎",
    year: 1998,
    organization: "朝陽科技大學",
    category: "個人獎項",
    description: "八七獎字八七0一三四號"
  },
  {
    id: 6,
    title: "朝陽科技大學八十七學年度推動學術研究與建教合作獎狀",
    year: 1998,
    organization: "朝陽科技大學",
    category: "個人獎項",
    description: "八七獎字八七00二一號"
  },
  {
    id: 7,
    title: "行政院國家科學委員會「延攬及留住特殊優秀人才獎勵」",
    year: 2011,
    organization: "行政院國家科學委員會",
    category: "個人獎項",
    description: "每月獎勵金6仟元，100/08~101/07"
  },
  {
    id: 8,
    title: "行政院國家科學委員會「延攬及留住特殊優秀人才獎勵」",
    year: 2012,
    organization: "行政院國家科學委員會",
    category: "個人獎項",
    description: "每月獎勵金6仟元，101/08~102/07"
  },
  {
    id: 9,
    title: "行政院國家科學委員會「延攬及留住特殊優秀人才獎勵」",
    year: 2013,
    organization: "行政院國家科學委員會",
    category: "個人獎項",
    description: "每月獎勵金6仟元，102/08~103/07"
  },
  {
    id: 10,
    title: "國立彰化師範大學終身免評鑑",
    year: 2015,
    organization: "國立彰化師範大學",
    category: "個人獎項"
  },
  {
    id: 11,
    title: "國立彰化師範大學95學年度傑出教學教師",
    year: 2006,
    organization: "國立彰化師範大學",
    category: "個人獎項"
  },
  {
    id: 12,
    title: "國立彰化師範大學106學年度傑出教學教師",
    year: 2017,
    organization: "國立彰化師範大學",
    category: "個人獎項"
  },
  {
    id: 13,
    title: "國立彰化師範大學112年度傑出服務教師獎",
    year: 2023,
    organization: "國立彰化師範大學",
    category: "個人獎項",
    description: "2023/12/13"
  },
  {
    id: 14,
    title: "擔任資訊工程學系系主任",
    year: 2020,
    organization: "國立彰化師範大學",
    category: "個人獎項",
    description: "109/08/01~111/07/31"
  }
];

// 指導學生獎項
export const studentAwards: Award[] = [
  {
    id: 101,
    title: "第六屆全國大專院校資訊管理專題競賽網際網路組第三名",
    year: 2002,
    organization: "全國大專院校",
    category: "指導學生獎項",
    description: "以Java Applet 開發之 SMIL即時同步遠距教學系統"
  },
  {
    id: 102,
    title: "教育部93學年度大專校院通訊科技專題製作競賽大專組佳作",
    year: 2005,
    organization: "教育部",
    category: "指導學生獎項",
    description: "整合GPS定位導航、即時多媒體影音、社群交友之行動通訊系統"
  },
  {
    id: 103,
    title: "教育部94學年度大專校院通訊科技專題製作競賽大專組入圍",
    year: 2006,
    organization: "教育部",
    category: "指導學生獎項",
    description: "P2P無線定位行動監視系統"
  },
  {
    id: 104,
    title: "97年度國立彰化師範大學資訊工程學系大學部專題網路通訊組第一名",
    year: 2009,
    organization: "國立彰化師範大學",
    category: "指導學生獎項",
    description: "葉曜端,林仕彥,陳建豪,李原嘉，Ubuntu作業系統下 NEMO Platform for Linux(NEPL)的安裝與流程分析"
  },
  {
    id: 105,
    title: "98年度國立彰化師範大學資訊工程學系大學部專題網路通訊組第一名",
    year: 2010,
    organization: "國立彰化師範大學",
    category: "指導學生獎項",
    description: "洪堯倫,魏經軒,陳維祥,翁珮瑜，巢狀行動網路下之階層式 Care-of Prefix with BUT 架構"
  },
  {
    id: 106,
    title: "100年度ITSA程式設計競賽優等",
    year: 2011,
    organization: "ITSA",
    category: "指導學生獎項",
    description: "戴宏達、謝東霖、洪千雅"
  },
  {
    id: 107,
    title: "2011軟體創作達人暑期成長營通過期初審查及媒合",
    year: 2011,
    organization: "軟體創作達人",
    category: "指導學生獎項",
    description: "戴宏達"
  },
  {
    id: 108,
    title: "Cisco 第十一屆華佗盃網路解疑大賽佳作",
    year: 2011,
    organization: "Cisco",
    category: "指導學生獎項",
    description: "李夢翰"
  },
  {
    id: 109,
    title: "2012全國運輸節能科技應用創意競賽第一名",
    year: 2012,
    organization: "全國運輸節能科技",
    category: "指導學生獎項",
    description: "戴宏達、葉澧漢、張小徽、謝東霖，基於交換即時路況之動態節能路徑規劃演算法設計與 Android 平台上的實作。入圍2012年全國能源科技創意競賽大專組決賽"
  },
  {
    id: 110,
    title: "103年度雲端計算技術與應用專題競賽第一名",
    year: 2014,
    organization: "雲端計算技術與應用",
    category: "指導學生獎項",
    description: "張英超、林登勇、陳奕安、辛忠翰、韓宗曄、陳新弘，智慧型餐廳排隊點餐IQA 演算法與Android APP實作"
  },
  {
    id: 111,
    title: "2015中部地區大專院校產學創新實作競賽決賽入圍",
    year: 2015,
    organization: "中部地區大專院校",
    category: "指導學生獎項",
    description: "基於車載網路路況分享之 Ubike 任你騎APP (黃俊豪、郭耕欣、潘凱文、陳俊賢)"
  },
  {
    id: 112,
    title: "106年度國立彰化師範大學資訊工程學系大學部專題網路通訊組第一名",
    year: 2017,
    organization: "國立彰化師範大學",
    category: "指導學生獎項",
    description: "徐鹏鈞、林原生、吳昱陞、陳品霖、林憲鋒，Pi3建構BLE 網狀網路的路邊停車系統"
  },
  {
    id: 113,
    title: "2018智慧機器人關鍵技術研發與應用競賽入圍",
    year: 2018,
    organization: "智慧機器人",
    category: "指導學生獎項",
    description: "紀佳昌、陳揚、張偉健、劉靜瑜、劉韋亨，EASY GO 視障輔助系統"
  },
  {
    id: 114,
    title: "109 全國大專院校產學創新實作競賽佳作",
    year: 2019,
    organization: "全國大專院校",
    category: "指導學生獎項",
    description: "張英超、劉韋亨、陳揚、張偉健、紀佳昌、劉靜瑜，結合藍牙室內定位與導航的O2O線上到線下營銷系統"
  },
  {
    id: 115,
    title: "109年中國工程師學會學生分會工程論文競賽資訊組優等",
    year: 2020,
    organization: "中國工程師學會",
    category: "指導學生獎項",
    description: "郭薰鎂、陳威融、宋亞靜、廖品豪、張英超，以人工智慧辨識大巴士的機車主動盲區預警系統"
  },
  {
    id: 116,
    title: "2020全國大專院校產學創新實作競賽最佳實作獎",
    year: 2020,
    organization: "全國大專院校",
    category: "指導學生獎項",
    description: "張英超、郭薰鎂、陳威融、宋亞靜、廖品豪，以人工智慧辨識機車進入大車盲點之主動預警系統"
  },
  {
    id: 117,
    title: "2022全國大專院校產學創新實作競賽陳聰林創毅特別獎",
    year: 2022,
    organization: "全國大專院校",
    category: "指導學生獎項",
    description: "張浩富、陳奕維、徐銘聰、王文甫、楊大億、張英超，結合雲端運算與人工智慧影像辨識的快速無人機階層式搜尋系統"
  },
  {
    id: 118,
    title: "國科會111年度大專生研究創作獎",
    year: 2023,
    organization: "行政院國家科學委員會",
    category: "指導學生獎項",
    description: "張浩富，結合雲端運算與人工智慧影像辨識的快速無人機階層式搜尋系統"
  },
  {
    id: 119,
    title: "2024全國大專院校產學創新實作競賽佳作",
    year: 2024,
    organization: "全國大專院校",
    category: "指導學生獎項",
    description: "陳佑丞、郭仲輝、張英超、謝宥宣，結合AI 圖像分割與物理光學之失焦深度演算法"
  },
  {
    id: 120,
    title: "2025全國大專院校產學創新實作競賽佳作",
    year: 2025,
    organization: "全國大專院校",
    category: "指導學生獎項",
    description: "王宇森、張英超，結合人工智慧影像分割與光學焦外模糊理論的單鏡頭距離測量系統"
  }
];

// 最佳論文獎
export const bestPaperAwards: Award[] = [
  {
    id: 201,
    title: "階層式多點傳播SIP結合QoS在3G無線多媒體上的Fast Handoff",
    year: 2003,
    organization: "TANET 2003",
    category: "最佳論文獎",
    description: "張英超、麥毅廷"
  },
  {
    id: 202,
    title: "車輛容忍延遲網路下高效率控制封包複製的軌跡路由協定",
    year: 2013,
    organization: "The 18th Mobile Computing Workshop",
    category: "最佳論文獎",
    description: "洪民翰,張英超"
  },
  {
    id: 203,
    title: "基於車輛網路分享的車輛資訊之動態共乘系統",
    year: 2016,
    organization: "International Conference on Advanced Information Technologies (AIT) 2016",
    category: "最佳論文獎",
    description: "張英超、洪似妮、廖啟盛、林佳陞"
  },
  {
    id: 204,
    title: "車載社群網路中一個擁有社會意識以軌跡為基礎的路由協定",
    year: 2017,
    organization: "11th International Conference on Advanced Information Technologies",
    category: "最佳論文獎",
    description: "章晴茹、張英超、廖啟盛"
  },
  {
    id: 205,
    title: "風速與電量感知多台UAV派遣與換手演算法與斷線重建 3R 演算法",
    year: 2021,
    organization: "2021全國智慧運算會議",
    category: "最佳論文獎",
    description: "鄭安修、張英超"
  },
  {
    id: 206,
    title: "A Time and Energy Efficient Multi-UAV Coverage Planning for the Search and Rescue Mission under Wind Fields",
    year: 2024,
    organization: "the 7th International Conference on Knowledge Innovation and Invention 2024 (ICKII 2024)",
    category: "最佳論文獎",
    description: "Chin-En Yen, Men-Yi Li, Yu-Hsuan Hsieh, Yu-Cheng Chen, Chunghui Kuo, and Ing-Chau Chang"
  },
  {
    id: 207,
    title: "SAMRL:基於自注意力機制之元強化學習多任務卸載策略",
    year: 2025,
    organization: "2025 Workshop on Wireless Ad-Hoc and Sensor Networks (WASN 2025)",
    category: "最佳論文獎",
    description: "宋亞靜,張英超"
  },
  {
    id: 208,
    title: "AI-Enhanced Mono-View Geometry for Digital Twin 3D Visualization in Autonomous Driving",
    year: 2025,
    organization: "the 8th International Conference on Knowledge Innovation and Invention 2025 (ICKII 2025)",
    category: "最佳論文獎",
    description: "Ing-Chau Chang, Yu-Chiao Chang, Chunghui Kuo, and Chin-En Yen"
  },
  {
    id: 209,
    title: "A Monocular Defocus Depth Estimation Algorithm Combining AI-Based Image Segmentation and Physical Optics",
    year: 2025,
    organization: "The 21st International Conference on Intelligent Information Hiding and Multimedia Signal Processing (IIHMSP 2025)",
    category: "最佳論文獎",
    description: "Ing-Chau Chang, Yu-Cheng Chen, Yu-Sen Wang, Chunghui Kuo, and Chin-En Yen"
  }
];

export const allAwards = [
  ...personalAwards,
  ...studentAwards,
  ...bestPaperAwards
];
