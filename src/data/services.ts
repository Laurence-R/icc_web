// 學術服務資料

export interface Service {
  id: number;
  type: "論文審查" | "會議評審" | "教育部課程" | "口試委員" | "專題評審" | "其他";
  title: string;
  year?: number;
  organization?: string;
  description?: string;
}

// 教育部課程
export const educationCourses: Service[] = [
  {
    id: 1,
    type: "教育部課程",
    title: "通訊科技人才培育先導型計畫特定課程補助",
    year: 2006,
    organization: "教育部",
    description: "教育部台顧字第0950130909號，2006/09-2006/12"
  },
  {
    id: 2,
    type: "教育部課程",
    title: "96-97年度資通訊課程推廣計畫",
    year: 2007,
    organization: "教育部",
    description: "教育部台顧字第0960205468A號，2007/12-2009/01"
  },
  {
    id: 3,
    type: "教育部課程",
    title: "98年度資通訊課程推廣計畫",
    year: 2009,
    organization: "教育部",
    description: "資通訊重點領域課程推廣計畫-車際通訊網路與協定，2009/02/01-2010/01/31"
  },
  {
    id: 4,
    type: "教育部課程",
    title: "執行彰化師範大學網路通訊、RFID學程",
    year: 2009,
    organization: "國立彰化師範大學",
    description: "2009/02~2011/01"
  },
  {
    id: 5,
    type: "教育部課程",
    title: "科技領域資訊科技科師資增能學分班",
    year: 2016,
    organization: "教育部",
    description: "105, 106, 108, 109, 110, 111, 112, 113年度資訊科技科教師增能推動計畫第二專長學分班授課教師"
  },
  {
    id: 6,
    type: "教育部課程",
    title: "新工程教育計畫",
    year: 2019,
    organization: "教育部",
    description: "授課教師，教育部3752，2019/05至2021/01"
  },
  {
    id: 7,
    type: "教育部課程",
    title: "智慧聯網技術課程推廣計畫",
    year: 2020,
    organization: "教育部",
    description: "共同主持人，物聯網課程，教育部4643，2020/08至2021/06"
  },
  {
    id: 8,
    type: "教育部課程",
    title: "智慧晶片應用與聯網技術課程",
    year: 2021,
    organization: "教育部",
    description: "共同主持人，物聯網課程，教育部5450，2021/08至2022/06"
  },
  {
    id: 9,
    type: "教育部課程",
    title: "智慧晶片系統與應用課程推廣計畫",
    year: 2022,
    organization: "教育部",
    description: "共同主持人，物聯網課程，教育部6062，2022/08至2023/06"
  }
];

// 會議論文審查與評審 (簡化版，只列舉部分代表性的)
export const reviewServices: Service[] = [
  {
    id: 101,
    type: "會議評審",
    title: "國際會議論文審查",
    organization: "IEEE/ACM",
    description: "IEEE WCNC, IEEE VTC, IEEE SMC, ACM IWCMC, IEEE ICPADS 等多個國際會議論文審查委員 (2007-2024)"
  },
  {
    id: 102,
    type: "論文審查",
    title: "期刊論文審查",
    organization: "國際期刊",
    description: "Journal of Network and Computer Applications, Information Sciences, IEEE Transactions on Vehicular Technology, Wireless Communications and Mobile Computing 等國際期刊審查委員 (2007-2024)"
  },
  {
    id: 103,
    type: "會議評審",
    title: "全國性研討會議程主持人與審查委員",
    organization: "TANET, NCS, Mobile Computing Workshop",
    description: "TANET, NCS, Mobile Computing Workshop 等全國性研討會議程主持人與論文審查委員 (2009-2024)"
  },
  {
    id: 104,
    type: "會議評審",
    title: "Mobile Computing 2016論文審查與最佳論文獎評審",
    year: 2016,
    organization: "Mobile Computing Workshop"
  }
];

// 口試委員
export const thesisCommittee: Service[] = [
  {
    id: 201,
    type: "口試委員",
    title: "台灣大學資工所博士學位口試委員",
    organization: "國立台灣大學",
    description: "2012/01, 2023/10"
  },
  {
    id: 202,
    type: "口試委員",
    title: "台灣大學資工所碩士學位口試委員",
    year: 2012,
    organization: "國立台灣大學"
  },
  {
    id: 203,
    type: "口試委員",
    title: "暨南大學資工所碩士學位口試委員",
    organization: "國立暨南國際大學",
    description: "2013-2020，多次擔任碩士學位口試委員"
  },
  {
    id: 204,
    type: "口試委員",
    title: "朝陽科技大學資工所碩士學位口試委員",
    organization: "朝陽科技大學",
    description: "2015-2020"
  }
];

// 專題競賽與成果評審
export const projectReview: Service[] = [
  {
    id: 301,
    type: "專題評審",
    title: "朝陽科技大學資訊學院學生專題競賽評審",
    year: 2016,
    organization: "朝陽科技大學"
  },
  {
    id: 302,
    type: "專題評審",
    title: "台中教育大學資訊科學學系大學部專題成果展評審教授",
    year: 2010,
    organization: "國立台中教育大學"
  },
  {
    id: 303,
    type: "專題評審",
    title: "臺中教育大學資工系研究成果發表會評審委員",
    organization: "國立台中教育大學",
    description: "2015, 2020, 2023"
  },
  {
    id: 304,
    type: "專題評審",
    title: "中興大學資工系資訊專題決賽評審",
    year: 2020,
    organization: "國立中興大學"
  },
  {
    id: 305,
    type: "專題評審",
    title: "逢甲大學資工系專題成果發表會評審委員",
    organization: "逢甲大學",
    description: "2022, 2023"
  }
];

// 其他學術服務
export const otherServices: Service[] = [
  {
    id: 401,
    type: "其他",
    title: "新興產業在地人才培訓計畫-高科技課程規劃討論會",
    year: 2012,
    organization: "教育部"
  },
  {
    id: 402,
    type: "其他",
    title: "2015中區產學合作交流媒合會暨專利發明技術移轉展示會",
    year: 2015,
    organization: "中區產學"
  },
  {
    id: 403,
    type: "其他",
    title: "朝陽科技大學資訊學院院務發展諮詢委員",
    year: 2017,
    organization: "朝陽科技大學"
  },
  {
    id: 404,
    type: "其他",
    title: "朝陽科技大學教學品保教育諮詢委員會議暨教育部深耕專業技術研發及人才培育計畫會議",
    year: 2019,
    organization: "朝陽科技大學"
  },
  {
    id: 405,
    type: "其他",
    title: "中區高中科展評審",
    year: 2011,
    organization: "教育部"
  },
  {
    id: 406,
    type: "其他",
    title: "中興大學 RFID計畫訪視委員",
    year: 2011,
    organization: "國立中興大學"
  },
  {
    id: 407,
    type: "其他",
    title: "教育部高中學科能力競賽命題",
    organization: "教育部",
    description: "2018, 2019, 2022, 2024"
  },
  {
    id: 408,
    type: "其他",
    title: "教授升等審查",
    organization: "多所大學",
    description: "輔仁大學、朝陽科技大學、靜宜大學、高雄科技大學、遠東科技大學，2015-2020"
  }
];

export const allServices = [
  ...educationCourses,
  ...reviewServices,
  ...thesisCommittee,
  ...projectReview,
  ...otherServices
];
