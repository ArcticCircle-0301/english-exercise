const vocabData = {
  1: [
    {
      s: "The guest speaker decided to ______ his speech in order to leave enough time for his audience to ask questions.",
      o: ["condense", "exceeded", "deficit", "distinguish"],
      c: 0,
      t: "客座演讲者决定压缩他的演讲，以便为听众留出足够的提问时间。",
      m: "condense（压缩，精简）",
      wa: ["exceeded（超过）— 词性不对，exceed是动词但语境不符，且这里需原形动词", "deficit（赤字，不足）— 是名词，不能作谓语动词", "distinguish（区分）— 语义不通，\"区分演讲\"不合逻辑"]
    },
    {
      s: "According to the media, China's wind power capacity has ______ the previous level considerably.",
      o: ["condense", "exceeded", "deficit", "asset"],
      c: 1,
      t: "据媒体报道，中国的风电产能已大大超过了之前的水平。",
      m: "exceeded（超过）",
      wa: ["condense — 不用于\"超过某个水平\"的语境", "deficit — 名词，不能跟在has后面构成完成时", "asset — 名词（资产），语法和语义都不对"]
    },
    {
      s: "Researchers conducted a set of psychological tests to determine the negative consequences of a sleep ______.",
      o: ["condense", "exceeded", "deficit", "competent"],
      c: 2,
      t: "研究人员进行了一系列心理测试，以确定睡眠不足的负面后果。",
      m: "deficit（不足，赤字）",
      wa: ["condense — 不与sleep搭配，\"压缩睡眠\"说不通", "exceeded — 是动词过去式/过去分词，此处需名词", "competent — 形容词（胜任的），语义和词性都不对"]
    },
    {
      s: "In addition to a sense of sight, bees also have an unusual sense of smell, so they can ______ more than 10 similar flower odors.",
      o: ["adequately", "precise", "proficiency", "distinguish"],
      c: 3,
      t: "除了视觉之外，蜜蜂还有非凡的嗅觉，因此它们能区分10种以上相似的花香。",
      m: "distinguish（区分，辨别）",
      wa: ["adequately — 副词（充足地），此处需要动词", "precise — 形容词（精确的），不能作动词", "proficiency — 名词（熟练程度），词性和语义都不对"]
    },
    {
      s: "Moving forward even in the face of great difficulties has become the most important ______ in my life and career.",
      o: ["adjusting", "competent", "precise", "asset"],
      c: 3,
      t: "即使面对巨大困难也要勇往直前，这已成为我生活和事业中最重要的资产。",
      m: "asset（资产，有价值的东西）",
      wa: ["adjusting — 现在分词/动名词，此处需要名词", "competent — 形容词，不能作名词使用", "precise — 形容词，语义不通"]
    },
    {
      s: "The lawyer proclaimed that they couldn't jump to conclusions because acceptable conclusions must be ______ supported by evidence.",
      o: ["asset", "distinguish", "deficit", "adequately"],
      c: 3,
      t: "律师声明他们不能草率下结论，因为可接受的结论必须有充分的证据支持。",
      m: "adequately（充分地，适当地）",
      wa: ["asset — 名词，不能修饰动词supported", "distinguish — 动词，不能作副词修饰supported", "deficit — 名词，语义和词性都不对"]
    },
    {
      s: "To help the employees become more communicative, the company offered several workshops to those who were not ______ in social interactions.",
      o: ["adjusting", "precise", "proficiency", "competent"],
      c: 3,
      t: "为了帮助员工变得更善于沟通，公司为那些在社交方面不够胜任的人提供了几次研讨会。",
      m: "competent（胜任的，有能力的）",
      wa: ["adjusting — 不与in搭配表示\"在……方面胜任\"", "precise — 意为\"精确的\"，不用于描述社交能力", "proficiency — 名词，不能作表语形容词"]
    },
    {
      s: "Some parents try to help solve the problems that their sons and daughters have in ______ to their college life.",
      o: ["competent", "adequately", "asset", "adjusting"],
      c: 3,
      t: "一些家长试图帮助解决子女在适应大学生活方面的问题。",
      m: "adjusting（适应，调整）",
      wa: ["competent — 形容词，不能用在介词in后面作动名词", "adequately — 副词，不能作介词宾语", "asset — 名词，\"在资产方面\"语义不通"]
    },
    {
      s: "China's series of ______ measures have proved to be effective for a steady economic recovery despite difficulties.",
      o: ["proficiency", "exceeded", "deficit", "precise"],
      c: 3,
      t: "中国一系列精准的措施已被证明对困难中的经济稳步复苏是有效的。",
      m: "precise（精确的，精准的）",
      wa: ["proficiency — 名词，不能修饰名词measures", "exceeded — 过去分词，不能作形容词修饰measures", "deficit — 名词，语义不通"]
    },
    {
      s: "The Italian businessman spoke fluent Chinese and demonstrated his Chinese ______ at the World Expo held in Shanghai.",
      o: ["precise", "adjusting", "condense", "proficiency"],
      c: 3,
      t: "那位意大利商人说一口流利的中文，并在上海世博会上展示了他的中文水平。",
      m: "proficiency（熟练程度，精通）",
      wa: ["precise — 形容词，不能作\"展示\"的宾语", "adjusting — 动名词，此处语义不通", "condense — 动词，语义和词性都不对"]
    }
  ],
  2: [
    {
      s: "With the ______ global fight against poverty still continuing, many countries are looking to draw inspiration from China.",
      o: ["prolonged", "release", "artistic", "browsing"],
      c: 0,
      t: "随着全球长期的反贫困斗争仍在继续，许多国家正在寻求从中国汲取灵感。",
      m: "prolonged（长期的，延长的）",
      wa: ["release（释放，发布）— 语义不通，\"释放的斗争\"不成立", "artistic（艺术的）— 不修饰\"反贫困斗争\"", "browsing（浏览）— 语义完全不相关"]
    },
    {
      s: "According to the news ______, her interest in writing about plants and animals came from her childhood.",
      o: ["prolonged", "release", "magnificence", "options"],
      c: 1,
      t: "根据新闻报道，她对撰写动植物相关内容的兴趣源于她的童年。",
      m: "release（发布，新闻稿）",
      wa: ["prolonged — 形容词，不能与news搭配", "magnificence — 名词（壮丽），语义不通", "options — 名词（选择），\"新闻选择\"不合语境"]
    },
    {
      s: "Many of them are beginners who have never done painting before and are looking to develop their ______ interests.",
      o: ["confirm", "reputable", "aspiration", "artistic"],
      c: 3,
      t: "他们中许多人是以前从未画过画的初学者，正在寻求发展他们的艺术兴趣。",
      m: "artistic（艺术的）",
      wa: ["confirm — 动词，不能修饰名词interests", "reputable — 形容词（声誉好的），不修饰interests", "aspiration — 名词（志向），不能作形容词"]
    },
    {
      s: "Consumers are increasingly comfortable shopping using their mobile devices, with 69 percent of people ______ and shopping online last year.",
      o: ["artistic", "prolonged", "release", "browsing"],
      c: 3,
      t: "消费者越来越习惯使用移动设备购物，去年有69%的人在浏览和在线购物。",
      m: "browsing（浏览）",
      wa: ["artistic — 与\"在线购物\"无关", "prolonged — 不用于描述上网行为", "release — 语义不通"]
    },
    {
      s: "The tourists were awestruck at the ______ of the Great Wall, the building of which started as early as the seventh century B.C.E.",
      o: ["options", "confirm", "reputable", "magnificence"],
      c: 3,
      t: "游客们对长城的壮丽感到敬畏，长城的建造最早可追溯到公元前7世纪。",
      m: "magnificence（壮丽，宏伟）",
      wa: ["options — \"选择\"与语境无关", "confirm — 动词，不能作介词宾语", "reputable — 形容词，不能作名词"]
    },
    {
      s: "As we know, earlier diagnosis can give better treatment ______ to patients, which will also help them get effective care.",
      o: ["magnificence", "browsing", "provokes", "options"],
      c: 3,
      t: "众所周知，早期诊断可以为患者提供更好的治疗选择，这也将帮助他们获得有效的护理。",
      m: "options（选择）",
      wa: ["magnificence — 与医疗语境无关", "browsing — 不用于医疗语境", "provokes — 动词第三人称单数，此处需要名词"]
    },
    {
      s: "Some clinics require people to call the front desk to ______ their appointments before they come to see the doctors.",
      o: ["reputable", "provokes", "aspiration", "confirm"],
      c: 3,
      t: "一些诊所要求人们在就诊前打电话给前台确认预约。",
      m: "confirm（确认）",
      wa: ["reputable — 形容词，不能作动词", "provokes — 意为\"激起\"，不用于\"确认预约\"", "aspiration — 名词，语义和词性都不对"]
    },
    {
      s: "The website is reliable because I've made dozens of purchases from this very ______ site with zero problems.",
      o: ["confirm", "options", "prolonged", "reputable"],
      c: 3,
      t: "这个网站是可靠的，因为我在这个声誉极好的网站上购买了几十次，从未出过问题。",
      m: "reputable（声誉好的，值得信赖的）",
      wa: ["confirm — 动词，不能修饰site", "options — 名词，不能作形容词", "prolonged — 意为\"长期的\"，不修饰网站"]
    },
    {
      s: "\"What do you think the author meant when …?\" is a common book club question, which ______ serious analysis of a topic.",
      o: ["aspiration", "reputable", "artistic", "provokes"],
      c: 3,
      t: "\"你认为作者……是什么意思？\"是读书俱乐部的常见问题，它引发对某个话题的认真分析。",
      m: "provokes（引发，激起）",
      wa: ["aspiration — 名词，不能作谓语动词", "reputable — 形容词，不能作动词", "artistic — 形容词，语义不通"]
    },
    {
      s: "Just as we all admire heroes, we look to others for inspiration and ______, but change has to start with you, as an individual.",
      o: ["provokes", "confirm", "magnificence", "aspiration"],
      c: 3,
      t: "正如我们都崇拜英雄一样，我们向他人寻求鼓舞和志向，但改变必须从你自己开始，作为个体。",
      m: "aspiration（志向，抱负）",
      wa: ["provokes — 动词，此处需要名词与inspiration并列", "confirm — 动词，不能作名词", "magnificence — 与\"个人志向\"的语境不符"]
    }
  ],
  3: [
    {
      s: "The boss said, \"The schedule is completely ______ because I do not need to be around and watch when you do your work.\"",
      o: ["flexible", "parallel", "assigned", "exhibit"],
      c: 0,
      t: "老板说：\"时间安排完全灵活，因为我不需要在你工作时在旁边看着。\"",
      m: "flexible（灵活的）",
      wa: ["parallel — 意为\"平行的\"，不修饰时间安排", "assigned — 意为\"被分配的\"，与\"不需要监督\"的逻辑矛盾", "exhibit — 动词/名词，不能作表语形容词"]
    },
    {
      s: "Currently, the stock market is not very stable, but over the long run, the growth of stock funds will ______ the growth of the economy.",
      o: ["flexible", "parallel", "persistence", "stunning"],
      c: 1,
      t: "目前股市不太稳定，但从长远来看，股票基金的增长将与经济增长平行。",
      m: "parallel（与……平行，与……同步）",
      wa: ["flexible — 不用于\"与经济增长平行\"的语境", "persistence — 名词，不能作动词", "stunning — 形容词，不能作动词"]
    },
    {
      s: "These student volunteers can decide how to perform any ______ work, for which they are qualified and have a strong passion.",
      o: ["parallel", "recruit", "endured", "assigned"],
      c: 3,
      t: "这些学生志愿者可以决定如何完成任何被分配的工作，他们对这些工作既有资格又有热情。",
      m: "assigned（被分配的）",
      wa: ["parallel — 形容词但语义不对", "recruit — 动词（招募），不能修饰work", "endured — 意为\"忍受的\"，不合语境"]
    },
    {
      s: "Human beings, by providing environmental enrichment, encourage animals to explore, interact, and ______ natural behaviors.",
      o: ["assigned", "vigorous", "internal", "exhibit"],
      c: 3,
      t: "人类通过提供环境丰富化，鼓励动物探索、互动并展现自然行为。",
      m: "exhibit（展现，展示）",
      wa: ["assigned — 不与natural behaviors搭配", "vigorous — 形容词（精力充沛的），不能作动词", "internal — 形容词，不能作动词"]
    },
    {
      s: "Along with extraordinary courage, qualities like ______, teamwork, and most importantly, leadership shine in all of our student activities.",
      o: ["stunning", "recruit", "flexible", "persistence"],
      c: 3,
      t: "除了非凡的勇气之外，坚韧、团队合作以及最重要的领导力等品质在我们所有学生活动中熠熠生辉。",
      m: "persistence（坚持不懈）",
      wa: ["stunning — 形容词，不能与teamwork并列作名词", "recruit — 动词/名词，与\"品质\"不符", "flexible — 形容词，不能作名词"]
    },
    {
      s: "This is a beautiful part of the city to live in, with stylish and architecturally ______ historic buildings lining the clean and quiet streets.",
      o: ["persistence", "endured", "vigorous", "stunning"],
      c: 3,
      t: "这是城市中一个非常美丽的居住区，干净安静的街道两旁排列着时尚且建筑上令人惊叹的历史建筑。",
      m: "stunning（令人惊叹的，极美的）",
      wa: ["persistence — 名词，不能修饰建筑", "endured — 过去分词，不修饰建筑外观", "vigorous — 不用于描述建筑外观"]
    },
    {
      s: "An energetic search will soon be put in place to ______ a qualified person who can continue with the leadership of a big company.",
      o: ["stunning", "exhibit", "internal", "recruit"],
      c: 3,
      t: "将很快启动一项积极搜寻，以招募一位能继续领导一家大公司的合格人选。",
      m: "recruit（招募）",
      wa: ["stunning — 形容词，不能作动词", "exhibit — 意为\"展示\"，不用于\"招募人员\"", "internal — 形容词，不能作动词"]
    },
    {
      s: "I've ______ hardships throughout my life, so I think I can handle the stress and achieve my full potential in this company.",
      o: ["recruit", "parallel", "assigned", "endured"],
      c: 3,
      t: "我一生中忍受了许多艰难困苦，所以我认为我能应对压力，在这家公司发挥全部潜力。",
      m: "endured（忍受，经受）",
      wa: ["recruit — 不与hardships搭配", "parallel — 不与hardships搭配", "assigned — \"被分配苦难\"不合表达习惯"]
    },
    {
      s: "Many people believe that ______ exercise and outdoor sports could better help people stay healthy and strong.",
      o: ["endured", "persistence", "stunning", "vigorous"],
      c: 3,
      t: "许多人认为，剧烈的运动和户外运动能更好地帮助人们保持健康强壮。",
      m: "vigorous（剧烈的，强有力的）",
      wa: ["endured — 不修饰exercise", "persistence — 名词，不能作形容词", "stunning — 不修饰运动强度"]
    },
    {
      s: "With the help of my family and friends, all of my ______ doubts about myself gradually disappeared and my confidence was restored.",
      o: ["vigorous", "flexible", "recruit", "internal"],
      c: 3,
      t: "在家人和朋友的帮助下，我所有内心的自我怀疑逐渐消失，信心得以恢复。",
      m: "internal（内部的，内心的）",
      wa: ["vigorous — 不修饰\"自我怀疑\"", "flexible — 不修饰doubts", "recruit — 动词/名词，不能作形容词"]
    }
  ],
  4: [
    {
      s: "According to medical doctors, if a patient's tumor is small, surgery is ______ performed to remove it.",
      o: ["typically", "survey", "random", "maximize"],
      c: 0,
      t: "根据医生的说法，如果患者的肿瘤较小，通常会通过手术来切除。",
      m: "typically（通常地，典型地）",
      wa: ["survey — 名词/动词，不能作副词", "random — 形容词，不能修饰performed", "maximize — 动词，语义不通"]
    },
    {
      s: "These graduates brought deep-water ocean ______ technology to the region to help explore the areas.",
      o: ["typically", "fulfilled", "resolutely", "survey"],
      c: 3,
      t: "这些毕业生为该地区带来了深水海洋测量技术，以帮助探索这些区域。",
      m: "survey（测量，勘测）",
      wa: ["typically — 副词，不能作名词修饰technology", "fulfilled — 过去分词，不与ocean搭配", "resolutely — 副词，不能作定语"]
    },
    {
      s: "Here is my suggestion in terms of writing process: Before you start writing an essay, just jot down ______ ideas to do brainstorming.",
      o: ["survey", "strategic", "exceptional", "random"],
      c: 3,
      t: "关于写作过程，我的建议是：在开始写文章之前，先随意写下一些想法来做头脑风暴。",
      m: "random（随机的，随意的）",
      wa: ["survey — 不修饰ideas", "strategic — 意为\"战略性的\"，与头脑风暴的随意性矛盾", "exceptional — 意为\"杰出的\"，不合语境"]
    },
    {
      s: "It is important for athletes to have rigorous physical and technical training to ______ their performance in sports competitions.",
      o: ["random", "chasing", "explicit", "maximize"],
      c: 3,
      t: "运动员接受严格的体能和技术训练以在体育比赛中最大化他们的表现，这很重要。",
      m: "maximize（最大化）",
      wa: ["random — 形容词，不能作动词", "chasing — 现在分词，不与performance搭配", "explicit — 形容词，不能作动词"]
    },
    {
      s: "After successful completion of these courses, students will have mostly ______ the academic requirements for their undergraduate studies.",
      o: ["maximize", "resolutely", "strategic", "fulfilled"],
      c: 3,
      t: "成功完成这些课程后，学生将基本满足本科学业的学术要求。",
      m: "fulfilled（满足，完成）",
      wa: ["maximize — 不与requirements搭配", "resolutely — 副词，此处需过去分词", "strategic — 形容词，不能作谓语动词"]
    },
    {
      s: "Only three short straightforward words, but they were said so ______ that all the audience were impressed.",
      o: ["fulfilled", "exceptional", "survey", "resolutely"],
      c: 3,
      t: "只有三个简短明了的词，但说得如此坚定，令所有观众都印象深刻。",
      m: "resolutely（坚定地）",
      wa: ["fulfilled — 过去分词，不能修饰\"said\"", "exceptional — 形容词，不能作副词", "survey — 名词/动词，不能作副词"]
    },
    {
      s: "This position would ideally suit candidates who have exposure to working on key ______ projects, preferably in the area of geophysics.",
      o: ["resolutely", "chasing", "explicit", "strategic"],
      c: 3,
      t: "该职位理想情况下适合有参与关键战略项目经验的候选人，最好是在地球物理学领域。",
      m: "strategic（战略性的）",
      wa: ["resolutely — 副词，不能修饰projects", "chasing — 现在分词，不修饰projects", "explicit — 意为\"明确的\"，不与key搭配修饰项目"]
    },
    {
      s: "Internship, which gives you valuable work experience, can offer you a(n) ______ opportunity to be competitive in the job market.",
      o: ["strategic", "typically", "random", "exceptional"],
      c: 3,
      t: "实习能给你宝贵的工作经验，可以为你提供在就业市场上具有竞争力的非凡机会。",
      m: "exceptional（非凡的，杰出的）",
      wa: ["strategic — 不修饰opportunity（此处强调\"特殊/杰出\"而非\"战略性\"", "typically — 副词，不能作形容词", "random — \"随机的机会\"与语境强调的\"宝贵\"不符"]
    },
    {
      s: "He understood that his ______ the dream was not for himself but for the people who had the same hopes and passions as him.",
      o: ["exceptional", "fulfilled", "maximize", "chasing"],
      c: 3,
      t: "他明白他追逐梦想不是为了自己，而是为了那些和他有同样希望和热情的人。",
      m: "chasing（追逐）",
      wa: ["exceptional — 形容词，不能接the dream", "fulfilled — 不用于\"追逐梦想\"", "maximize — 不与dream搭配"]
    },
    {
      s: "He gave us very ______ instructions on how to handle the new machine, so we all understood what he meant.",
      o: ["chasing", "resolutely", "strategic", "explicit"],
      c: 3,
      t: "他给了我们关于如何操作新机器的非常明确的说明，所以我们所有人都明白了他的意思。",
      m: "explicit（明确的，清楚的）",
      wa: ["chasing — 不修饰instructions", "resolutely — 副词，不能作形容词", "strategic — 意为\"战略性的\"，不合语境"]
    }
  ],
  5: [
    {
      s: "The ______ of the \"upright\" message is to ask people to save, while the \"permissive\" message asks people to spend.",
      o: ["dilemma", "perspective", "diverse", "objective"],
      c: 3,
      t: "\"节俭\"信息的目的（宗旨）是让人们储蓄，而\"放纵\"信息则让人们消费。",
      m: "objective（目的，目标）",
      wa: ["dilemma — 名词（困境），语义不通", "perspective — 名词（视角），与\"信息的目的\"不符", "diverse — 形容词，不能作名词"]
    },
    {
      s: "If you find yourself in a(n) ______ about what is the right decision for your career, speak to a career counselor.",
      o: ["objective", "budget", "loyalty", "dilemma"],
      c: 3,
      t: "如果你在职业正确决策上陷入两难，去找职业顾问谈谈。",
      m: "dilemma（困境，两难）",
      wa: ["objective — 不与in a搭配", "budget — \"在预算中\"不合语境", "loyalty — 名词（忠诚），\"在忠诚中\"不通"]
    },
    {
      s: "It is important for parents to listen to their children's opinion because they may have a very different ______ on the things they've seen.",
      o: ["diverse", "defy", "urge", "perspective"],
      c: 3,
      t: "父母倾听孩子意见很重要，因为孩子对他们所见事物可能有非常不同的视角。",
      m: "perspective（视角，观点）",
      wa: ["diverse — 形容词，不能作名词", "defy — 动词，不能与on搭配", "urge — 动词/名词，语义不通"]
    },
    {
      s: "To cater for the different tastes of athletes from all over the world, the organizers of the Beijing Winter Olympics prepared ______ dishes.",
      o: ["perspective", "manipulated", "tackle", "diverse"],
      c: 3,
      t: "为了迎合来自世界各地运动员的不同口味，北京冬奥会的组织者准备了多样化的菜肴。",
      m: "diverse（多样的，不同的）",
      wa: ["perspective — 名词，不能修饰dishes", "manipulated — 过去分词（被操纵的），语义不通", "tackle — 动词，不能作形容词"]
    },
    {
      s: "If you want to save money for a rainy day, making a(n) ______ is the first step you may want to take because it gives you a clear plan.",
      o: ["loyalty", "defy", "objective", "budget"],
      c: 3,
      t: "如果你想未雨绸缪存钱，做预算是你可能想采取的第一步，因为它能给你一个清晰的计划。",
      m: "budget（预算）",
      wa: ["loyalty — 名词（忠诚），语义不通", "defy — 动词，不能作名词", "objective — 不与\"制定计划\"的逻辑对应"]
    },
    {
      s: "The Chinese legend goes that Yue Fei's mother tattooed four Chinese characters on his back to remind him of the importance of ______ to the nation.",
      o: ["budget", "dilemma", "urge", "loyalty"],
      c: 3,
      t: "中国的传说讲岳飞的母亲在他背上刺了四个字，以提醒他对国家忠诚的重要性。",
      m: "loyalty（忠诚）",
      wa: ["budget — 不与\"对国家\"搭配", "dilemma — 不合语境", "urge — 动词，不能作名词"]
    },
    {
      s: "When children are addicted to online games, they would often ______ their parents and stay online for hours every day.",
      o: ["loyalty", "manipulated", "tackle", "defy"],
      c: 3,
      t: "当孩子沉迷于网络游戏时，他们经常违抗父母，每天在线数小时。",
      m: "defy（违抗，反抗）",
      wa: ["loyalty — 名词，不能作动词", "manipulated — 过去分词，不能跟在would后面", "tackle — 意为\"处理\"，不用于\"违抗父母\""]
    },
    {
      s: "The report goes on to ______ the technicians to take a more active role in developing the standards of artificial intelligence.",
      o: ["defy", "diverse", "perspective", "urge"],
      c: 3,
      t: "报告接着敦促技术人员在制定人工智能标准方面发挥更积极的作用。",
      m: "urge（敦促，催促）",
      wa: ["defy — 不用于\"敦促某人做某事\"", "diverse — 形容词，不能作动词", "perspective — 名词，不能作动词"]
    },
    {
      s: "Many people have no defense against advertising techniques and are often ______ into buying certain products they don't need.",
      o: ["urge", "budget", "objective", "manipulated"],
      c: 3,
      t: "许多人对广告技巧毫无防备，经常被操纵去购买他们不需要的某些产品。",
      m: "manipulated（被操纵）",
      wa: ["urge — 动词原形，不能构成被动语态", "budget — 名词/动词，语义不对", "objective — 形容词/名词，不与into搭配"]
    },
    {
      s: "The organization has been working with local authorities and officials to ______ the problem of climate change.",
      o: ["manipulated", "dilemma", "loyalty", "tackle"],
      c: 3,
      t: "该组织一直在与地方当局和官员合作，以应对气候变化问题。",
      m: "tackle（应对，处理）",
      wa: ["manipulated — 过去分词，不能作动词原形", "dilemma — 名词，不能作动词", "loyalty — 名词，不能作动词"]
    }
  ],
  6: [
    {
      s: "People participating in problem-solving activities are often willing to ______ their methods to work out solutions.",
      o: ["rivals", "discarded", "prohibitions", "modify"],
      c: 3,
      t: "参与解决问题活动的人通常愿意修改他们的方法来找到解决方案。",
      m: "modify（修改，调整）",
      wa: ["rivals — 名词复数，不能作动词", "discarded — 过去分词，不用于\"修改方法\"", "prohibitions — 名词复数，不能作动词"]
    },
    {
      s: "We are two neighboring countries, and we shouldn't be ______, or a threat to each other, but partners.",
      o: ["modify", "prejudiced", "restored", "rivals"],
      c: 3,
      t: "我们是两个邻国，不应该成为对手或彼此的威胁，而应该是伙伴。",
      m: "rivals（对手，竞争者）",
      wa: ["modify — 动词，不能作名词", "prejudiced — 形容词，语义不通", "restored — 过去分词，不用于此语境"]
    },
    {
      s: "The film ______ its position as the critics' favorite so far for its surprising and inspiring plot.",
      o: ["rivals", "discarded", "has maintained", "enlightening"],
      c: 2,
      t: "这部电影因其出人意料且鼓舞人心的情节，迄今为止一直保持着评论家最爱的地位。",
      m: "has maintained（一直保持）",
      wa: ["rivals — 不与position搭配，且时态不对", "discarded — 意为\"丢弃\"，与语境相反", "enlightening — 形容词/现在分词，不能作谓语"]
    },
    {
      s: "Though many things have changed in our culture, our commitment and sense of responsibility have never been ______.",
      o: ["has maintained", "prohibitions", "eliminate", "discarded"],
      c: 3,
      t: "尽管我们的文化中许多事物已经改变，但我们的承诺和责任感从未被抛弃。",
      m: "discarded（被抛弃，被丢弃）",
      wa: ["has maintained — 时态不对，不能用在have never been后面", "prohibitions — 名词，不能构成被动语态", "eliminate — 动词原形，不用于被动完成时"]
    },
    {
      s: "The Act primarily attempts to add criminal ______ against using the Internet to do anything illegal or unlawful.",
      o: ["discarded", "prejudiced", "restored", "prohibitions"],
      c: 3,
      t: "该法案主要试图增加刑事禁止条款，禁止利用互联网做任何非法或不正当的事情。",
      m: "prohibitions（禁令，禁止）",
      wa: ["discarded — 过去分词，不能作名词", "prejudiced — 形容词，不能作名词", "restored — 过去分词，不能作名词"]
    },
    {
      s: "He's been obsessed with the idea that we are ______ against him, but actually we have been treating him fairly.",
      o: ["prohibitions", "enlightening", "eliminate", "prejudiced"],
      c: 3,
      t: "他一直执着于认为我们对他有偏见，但实际上我们一直公平对待他。",
      m: "prejudiced（有偏见的）",
      wa: ["prohibitions — 名词，不能作形容词", "enlightening — 形容词但语义相反", "eliminate — 动词，不能跟在are后面作形容词"]
    },
    {
      s: "The doctor says that the regular use of this device can help with sleeping disorders, and healthy sleep patterns can be ______ eventually.",
      o: ["prejudiced", "modify", "rivals", "restored"],
      c: 3,
      t: "医生说定期使用该设备可以帮助改善睡眠障碍，健康的睡眠模式最终可以恢复。",
      m: "restored（恢复）",
      wa: ["prejudiced — 不修饰sleep patterns", "modify — 动词原形，不能构成被动语态", "rivals — 名词，不能作动词"]
    },
    {
      s: "Studying the humanities has been enjoyable and ______, providing me with a new and different perspective on the world.",
      o: ["restored", "has maintained", "discarded", "enlightening"],
      c: 3,
      t: "学习人文学科既令人愉快又富有启发性，为我提供了一个新的、不同的世界观。",
      m: "enlightening（有启发性的）",
      wa: ["restored — 过去分词，不与enjoyable并列作形容词", "has maintained — 动词短语，不能作形容词", "discarded — 与语境相反"]
    },
    {
      s: "We should stay committed to openness, ______ all barriers to the development of productivity, and steer globalization in the right direction.",
      o: ["enlightening", "prohibitions", "prejudiced", "eliminate"],
      c: 3,
      t: "我们应坚持开放，消除一切阻碍生产力发展的障碍，并引导全球化朝正确方向发展。",
      m: "eliminate（消除）",
      wa: ["enlightening — 形容词，不能作动词", "prohibitions — 名词，不能作动词", "prejudiced — 形容词，不能作动词"]
    }
  ]
};

const phraseData = {
  1: [
    {
      s: "In Chinese culture, adult children are expected to take care of their aged parents, so they ______ contact or visit their parents regularly.",
      ca: "are obliged to",
      m: "有义务做……，不得不",
      t: "在中国文化中，成年子女被期望照顾年迈的父母，因此他们有义务定期联系或看望父母。",
      ep: "容易选\"run into\"（偶遇），但句意是\"有义务\"，而非\"偶然\"联系。"
    },
    {
      s: "Most of the time, people don't really care about natural disasters and won't ______ avoiding them till they are personally affected by one.",
      ca: "get serious about",
      m: "认真对待",
      t: "大多数时候，人们并不真正关心自然灾害，直到自己亲身受到灾害影响，才会认真对待避免灾害这件事。",
      ep: "注意won't后接动词原形，整句是\"不会认真对待\"之意。"
    },
    {
      s: "When you ______ a friend that you haven't seen for a long time and have a good chat with him or her, you will surely be delighted.",
      ca: "run into",
      m: "偶遇，碰见",
      t: "当你偶遇一位很久没见的朋友并与他/她愉快聊天时，你一定会很高兴。",
      ep: "易与\"are obliged to\"混淆，但此处语境是\"偶然遇见\"。"
    },
    {
      s: "While reading, we need to ______ facts and opinions in order to have a better and more accurate comprehension.",
      ca: "distinguish between",
      m: "区分……和……",
      t: "阅读时，我们需要区分事实和观点，以便有更好、更准确的理解。",
      ep: "注意\"between…and…\"的搭配结构。"
    },
    {
      s: "The growth of the food e-commerce sector in China has played an important role in promoting the sales of agricultural products ______ the fields.",
      ca: "fresh from",
      m: "刚从……来的，新鲜出炉的",
      t: "中国食品电商行业的增长在促进刚从田间采摘的农产品销售方面发挥了重要作用。",
      ep: "不要理解为\"新鲜的\"，此短语意为\"刚从……出来的\"。"
    },
    {
      s: "If I don't like someone or something, I might just say I ______ them, even though it sounds a little rude.",
      ca: "am allergic to",
      m: "对……过敏；极度反感",
      t: "如果我不喜欢某人或某事，我可能就直接说我对他们反感，即使听起来有点粗鲁。",
      ep: "这里是比喻用法，不是字面的\"过敏\"，而是\"极度不喜欢/反感\"。"
    },
    {
      s: "When the topic was discussed, I quickly ______ because I am not good at things like math and analytical skills.",
      ca: "got lost",
      m: "迷失，困惑",
      t: "当讨论那个话题时，我很快就迷糊了，因为我不擅长数学和分析技能之类的东西。",
      ep: "注意时态，主句是过去时，所以用\"got\"而非\"get\"。"
    },
    {
      s: "It is hoped that some companies will ______ this small old town to invest and build factories.",
      ca: "become attracted to",
      m: "被吸引到",
      t: "人们希望一些公司会被这座古老的小镇所吸引，来投资建厂。",
      ep: "注意主语是some companies，所以用become（而非becomes/became）。"
    },
    {
      s: "The Tang Dynasty is ______ a golden age in Chinese history, when Chinese culture spread across much of Asia.",
      ca: "looked upon as",
      m: "被视为",
      t: "唐朝被视为中国历史上的黄金时代，当时中国文化传播到了亚洲大部分地区。",
      ep: "注意被动语态结构\"be looked upon as\"，意为\"被看作\"。"
    }
  ],
  2: [
    {
      s: "When I first saw the scenery of Mount Huangshan, I was ______: the fascinating pine trees, the spectacular peaks, and the fairyland of clouds and mists.",
      ca: "in awe",
      m: "敬畏，惊叹",
      t: "当我第一次看到黄山的风景时，我惊叹不已：迷人的松树、壮观的山峰和如仙境般的云雾。",
      ep: "\"in awe\"表示\"充满敬畏/惊叹\"的情感状态。"
    },
    {
      s: "The group discussion became heated, with creative ideas and suggestions ______ from time to time.",
      ca: "thrown out",
      m: "提出，抛出",
      t: "小组讨论变得激烈起来，不时有人提出创造性的想法和建议。",
      ep: "此处是过去分词作后置定语，表示被动（想法被提出）。"
    },
    {
      s: "Whenever there is a chance we can help these children, we make a top effort and don't want to ______.",
      ca: "let them down",
      m: "让他们失望",
      t: "只要有机会帮助这些孩子，我们就会全力以赴，不想让他们失望。",
      ep: "\"let sb down\"意为\"让某人失望\"。"
    },
    {
      s: "Science is not my profession, so if you want to discuss it, you could ______ other people here who know science better than me.",
      ca: "pick the brains of",
      m: "向……请教，向……取经",
      t: "科学不是我的专业，所以如果你想讨论它，你可以向这里比我更懂科学的其他人请教。",
      ep: "这是一个口语化的短语，不是字面的\"挑大脑\"。"
    },
    {
      s: "I draw inspiration from many teachers who are ______ their work and try to spread their enthusiasm to their students.",
      ca: "passionate about",
      m: "对……充满热情",
      t: "我从许多对工作充满热情并试图将热情传递给学生的老师身上汲取灵感。",
      ep: "\"passionate about\"表示\"对某事充满热情/热爱\"。"
    },
    {
      s: "If you feel that your grades or your study skills are ______, you may turn to your teachers for advice.",
      ca: "not up to par",
      m: "未达到标准，不合格",
      t: "如果你觉得你的成绩或学习技能未达到标准，你可以向老师寻求建议。",
      ep: "\"up to par\"意为\"达到标准\"，否定形式\"not up to par\"表示\"不达标\"。"
    },
    {
      s: "I had never been to this restaurant before, but it ______ fantastic not only because of its delicious food but also the wonderful service.",
      ca: "turned out",
      m: "结果是，证明是",
      t: "我以前从未去过这家餐厅，但它结果好极了——不仅因为美味的食物，还因为出色的服务。",
      ep: "\"turn out\"意为\"结果是\"，强调出乎意料的好结果。"
    },
    {
      s: "If one is always ______ money, appearance, and social status, they will unfortunately forget what is most important in their life.",
      ca: "obsessed with",
      m: "痴迷于，执着于",
      t: "如果一个人总是痴迷于金钱、外貌和社会地位，他们就会不幸地忘记生活中最重要的是什么。",
      ep: "\"obsessed with\"表示\"对某事过度痴迷/执着\"。"
    }
  ],
  3: [
    {
      s: "The course project that I completed weeks ago has helped me ______ my creativity and intuition which I didn't even realize I had.",
      ca: "tap into",
      m: "发掘，利用",
      t: "我几周前完成的课程项目帮助我发掘了我甚至不知道自己拥有的创造力和直觉。",
      ep: "\"tap into\"意为\"发掘/利用内在的潜力或资源\"。"
    },
    {
      s: "Many people probably ______ fast Internet access is almost everywhere – at home, at work, and even in the most remote areas.",
      ca: "take it for granted that",
      m: "认为……理所当然",
      t: "许多人可能认为快速的网络接入几乎无处不在是理所当然的——在家里、工作中，甚至在最偏远的地区。",
      ep: "注意that从句跟在后面，整个结构是\"take it for granted that + 从句\"。"
    },
    {
      s: "It's probably true that we always ______ the goal that we consider challenging but achievable to gain a sense of accomplishment.",
      ca: "strive for",
      m: "为……奋斗，努力争取",
      t: "我们总是努力争取我们认为有挑战性但可实现的目标以获得成就感，这大概是事实。",
      ep: "\"strive for\"表示\"为某个目标努力奋斗\"。"
    },
    {
      s: "It's ______ to say that the kitchen he installed last month is 100 times better, and now I fortunately have the kitchen I dreamed of.",
      ca: "no exaggeration",
      m: "毫不夸张",
      t: "毫不夸张地说，他上个月安装的厨房好了一百倍，现在我终于拥有了梦想中的厨房。",
      ep: "\"no exaggeration\"意为\"毫不夸张\"，常用结构\"It's no exaggeration to say...\"。"
    },
    {
      s: "Since the exam ______ what you have learned, you can expect to see some questions from previous assignments.",
      ca: "is based on",
      m: "基于",
      t: "既然考试是基于你所学的内容，你可以期待看到一些来自之前作业的题目。",
      ep: "\"be based on\"意为\"以……为基础/基于\"。"
    },
    {
      s: "I think journalists work in a timely manner and ______ daily deadlines or tight working schedules because they were well trained in this way.",
      ca: "are accustomed to",
      m: "习惯于",
      t: "我认为记者工作及时，并且习惯于日常截止日期或紧凑的工作安排，因为他们在这方面训练有素。",
      ep: "\"be accustomed to\"后接名词或动名词，表示\"习惯于\"。"
    },
    {
      s: "The situation between us is very challenging, but we have to learn how to handle the difficult situation ______ improving our relations.",
      ca: "for the sake of",
      m: "为了……的利益",
      t: "我们之间的局面非常具有挑战性，但为了改善关系，我们必须学会如何处理困难局面。",
      ep: "\"for the sake of\"意为\"为了……的利益/缘故\"。"
    },
    {
      s: "The award-winning chef says that since he was young, he ______ Chinese food because of its rich ingredients and well-balanced nutrition.",
      ca: "has had a passion for",
      m: "对……充满热情",
      t: "这位获奖厨师说，从小他就对中国菜充满热情，因为其食材丰富、营养均衡。",
      ep: "注意时态——\"since he was young\"对应现在完成时\"has had\"。"
    }
  ],
  4: [
    {
      s: "When I was traveling in China, I would ride my bike slowly, take pictures of the things that ______, and talk to people.",
      ca: "caught my eye",
      m: "吸引我的注意",
      t: "在中国旅行时，我会慢慢骑自行车，拍下引起我注意的事物，和人们交谈。",
      ep: "注意时态一致，用过去时\"caught\"。"
    },
    {
      s: "As a senior assistant in the lab for quite a few years, I was thrilled to ______ teach lab techniques to the new students.",
      ca: "be entrusted to",
      m: "被委托做……",
      t: "作为实验室的高级助理多年，我很兴奋能被委托教授新学生实验技术。",
      ep: "\"entrust sb to do sth\"意为\"委托某人做某事\"，此处被动用法。"
    },
    {
      s: "It was raining heavily, so she spent the whole afternoon ______ in her dorm room and reading.",
      ca: "holing up",
      m: "躲藏，窝着不出门",
      t: "雨下得很大，所以她整个下午都窝在宿舍里看书。",
      ep: "\"hole up\"是口语用法，意为\"躲藏，不出门\"。注意spend time doing结构用-ing形式。"
    },
    {
      s: "We will build a closer partnership and ______ high-quality cooperation under the Belt and Road Initiative.",
      ca: "remain committed to",
      m: "继续致力于",
      t: "我们将建立更紧密的伙伴关系，并在\"一带一路\"倡议下继续致力于高质量合作。",
      ep: "\"remain committed to\"中to是介词，后接名词/动名词。"
    },
    {
      s: "I went back to school to get my coaching certification, and my efforts and persistence ______ in the end.",
      ca: "paid off",
      m: "得到回报，取得成功",
      t: "我回到学校考取教练资格证书，我的努力和坚持最终得到了回报。",
      ep: "\"pay off\"不是\"付钱\"，而是\"取得成效/得到回报\"。"
    },
    {
      s: "She joined the lab as a summer student and then ______ to complete her fourth-year honors thesis before graduation.",
      ca: "stayed on",
      m: "留下来继续",
      t: "她作为暑期学生加入了实验室，然后留下来完成了她的四年级荣誉论文后才毕业。",
      ep: "\"stay on\"意为\"留下来继续（学习/工作等）\"。"
    },
    {
      s: "The traditions that ______ from generation to generation will surely enrich our culture and be carried forward.",
      ca: "are passed down",
      m: "被传承",
      t: "代代相传的传统一定会丰富我们的文化并被发扬光大。",
      ep: "注意被动语态，传统是\"被传承\"的。"
    },
    {
      s: "To fight against the common health crisis, China has made great efforts to help other countries ______ medicines.",
      ca: "in urgent need of",
      m: "急需",
      t: "为了应对共同的健康危机，中国已做出巨大努力帮助其他国家获得急需的药品。",
      ep: "\"in urgent need of\"意为\"急需某物\"。"
    }
  ],
  5: [
    {
      s: "My friend planned to travel to Europe in August, but I advised him to ______ going till October when the weather is cooler.",
      ca: "put off",
      m: "推迟",
      t: "我朋友计划8月去欧洲旅行，但我建议他推迟到10月天气较凉的时候再去。",
      ep: "\"put off\"意为\"推迟\"，不是\"关掉\"（那是put out/turn off）。"
    },
    {
      s: "The evidence obtained by the police was ______ the statement he provided but consistent with what the witness described.",
      ca: "at odds with",
      m: "与……不一致，与……矛盾",
      t: "警方获得的证据与他提供的陈述不一致，但与目击者描述的一致。",
      ep: "\"at odds with\"意为\"与……矛盾/不一致\"，注意与\"consistent with\"（一致）形成对比。"
    },
    {
      s: "To ______ its steady economic performance, China will work hard to ensure the supply of commodities and keep their prices stable.",
      ca: "retain control over",
      m: "保持对……的控制",
      t: "为了保持对经济稳定表现的控制，中国将努力确保商品供应并保持价格稳定。",
      ep: "\"retain control over\"意为\"保持对某事物的控制\"。"
    },
    {
      s: "The working team is well trained, so it has the ability to see, analyze, and react to issues before they ______.",
      ca: "spin out of control",
      m: "失控",
      t: "工作团队训练有素，因此能够在问题失控之前发现、分析并做出反应。",
      ep: "\"spin out of control\"意为\"失去控制\"。"
    },
    {
      s: "Both experts and teachers say that children tend to ______ when they see their parents making similar efforts.",
      ca: "do their utmost",
      m: "尽最大努力",
      t: "专家和教师都说，当孩子看到父母也在做出类似努力时，他们往往会尽最大努力。",
      ep: "\"do one's utmost\"意为\"尽某人最大努力\"。"
    },
    {
      s: "As she entered the most dynamic period of her career, Kylie ______ her success and the impact of her college education.",
      ca: "took stock of",
      m: "审视，评估",
      t: "当Kylie进入她职业生涯中最具活力的阶段时，她审视了自己的成功和大学教育的影响。",
      ep: "\"take stock of\"意为\"盘查、评估\"，不是\"买股票\"。"
    },
    {
      s: "The chief executive is confident that current growth levels can be maintained since all the development projects ______.",
      ca: "have stayed on track",
      m: "保持在正轨上",
      t: "首席执行官有信心可以维持当前的增长水平，因为所有发展项目都保持在正轨上。",
      ep: "\"stay on track\"意为\"保持在正轨上/按计划进行\"。"
    },
    {
      s: "It is very important for students to understand and ______ new information; besides, they should judge the information carefully.",
      ca: "take in",
      m: "吸收，理解",
      t: "对学生来说，理解和吸收新信息非常重要；此外，他们还应该仔细判断这些信息。",
      ep: "\"take in\"意为\"吸收/理解信息\"。"
    }
  ],
  6: [
    {
      s: "The cell phone has become an important part of our life, and we ______ it so much that we carry it anywhere we go.",
      ca: "are attached to",
      m: "依恋，离不开",
      t: "手机已成为我们生活的重要组成部分，我们如此依恋它，以至于走到哪里都带着它。",
      ep: "\"be attached to\"不是\"附着在\"的物理含义，而是\"感情上依恋\"。"
    },
    {
      s: "The support our volunteers provide to the community and society cannot ______ purely practical terms.",
      ca: "be measured in",
      m: "用……来衡量",
      t: "我们的志愿者为社区和社会提供的支持不能仅仅用纯实用的标准来衡量。",
      ep: "\"be measured in\"意为\"用某种标准/方式来衡量\"。"
    },
    {
      s: "Please don't forget the Tourist Guide, which should ______ when you travel to different places in Asia and Europe.",
      ca: "come in handy",
      m: "派上用场",
      t: "请不要忘记带上旅游指南，当你到亚洲和欧洲的不同地方旅行时它会派上用场。",
      ep: "\"come in handy\"意为\"派上用场/方便有用\"。"
    },
    {
      s: "I can't believe you left the oven on! It's too dangerous since the house might ______.",
      ca: "go up in flames",
      m: "着火，烧毁",
      t: "我不敢相信你忘了关烤箱！太危险了，房子可能会着火。",
      ep: "\"go up in flames\"意为\"着火/被烧毁\"。"
    },
    {
      s: "I think students would ______ or miss many opportunities if they don't try hard and don't acquire the knowledge taught at college.",
      ca: "pay a big price",
      m: "付出巨大代价",
      t: "我认为如果学生不努力，不获取大学所教授的知识，他们将付出巨大代价或错过许多机会。",
      ep: "\"pay a big price\"意为\"付出巨大代价\"。"
    },
    {
      s: "If you ______ travel and trying to adjust to a new time zone, you may not be ready to face the challenge of the new environment yet.",
      ca: "are exhausted from",
      m: "因……而筋疲力尽",
      t: "如果你因旅行和试图适应新时区而筋疲力尽，你可能还没有准备好面对新环境的挑战。",
      ep: "\"be exhausted from\"意为\"因某事而筋疲力尽\"。"
    },
    {
      s: "Though they are not discussed in this particular article, these topics ______ other articles and publications.",
      ca: "are featured in",
      m: "在……中被特别报道/介绍",
      t: "虽然这些话题在这篇特定文章中没有讨论，但它们在其他文章和出版物中有专题报道。",
      ep: "\"be featured in\"意为\"在某处被特别报道/介绍\"。"
    },
    {
      s: "Class discussions next week will ______ the importance of love, communication, and a close relationship between parents and their children.",
      ca: "revolve around",
      m: "围绕……展开",
      t: "下周的课堂讨论将围绕爱、沟通以及父母与子女之间亲密关系的重要性展开。",
      ep: "\"revolve around\"意为\"以……为中心/围绕……展开\"。"
    }
  ]
};

const phrasePools = {
  1: ["are obliged to", "get serious about", "run into", "distinguish between", "fresh from", "am allergic to", "got lost", "become attracted to", "looked upon as"],
  2: ["in awe", "thrown out", "let them down", "pick the brains of", "passionate about", "not up to par", "turned out", "obsessed with"],
  3: ["tap into", "take it for granted that", "strive for", "no exaggeration", "is based on", "are accustomed to", "for the sake of", "has had a passion for"],
  4: ["caught my eye", "be entrusted to", "holing up", "remain committed to", "paid off", "stayed on", "are passed down", "in urgent need of"],
  5: ["put off", "at odds with", "retain control over", "spin out of control", "do their utmost", "took stock of", "have stayed on track", "take in"],
  6: ["are attached to", "be measured in", "come in handy", "go up in flames", "pay a big price", "are exhausted from", "are featured in", "revolve around"]
};
