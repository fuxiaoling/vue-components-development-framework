export default {
  myName: '傅小凌',
  avatarImage: require('./assets/images/avatar.jpg'), // 120 * 120
  resumeStatus: 1, // 0: 在职中，1：求职中
  jobPosts: '高级前端开发程序员 / 前端架构设计师',
  wechatImage:  require('./assets/images/Wechat-Friend.png'), // 个人微信二维码 130 * 130
  qq: '279811056',
  email: '279811056@qq.com',
  downloadUrl: 'http://hi.fuxiaoling.com/%E5%82%85%E5%B0%8F%E5%87%8C%E7%9A%84%E7%AE%80%E5%8E%86.zip',
  basicInfo: [
    {
      '年龄': `${new Date().getFullYear() - 1985}岁`,
      '学历': '全日制大专',
      '手机': '18025427329 / 15707908513',
      '微信': '15707908513 / franks1103',
      '邮箱': '279811056@qq.com',
      '住址': '广东省深圳市龙华区'
    }, {
      '开发经验': '9年前端 + 2年PHP + 1年UI',
      '简历页面': 'http://hi.fuxiaoling.com',
      '独立博客': 'http://blog.fuxiaoling.com',
      '网络博客': 'https://blog.csdn.net/franks_t_d',
      'Github库': 'https://github.com/fuxiaoling'
    }
  ],
  skills: [
    {
      'scope': '前端技术',
      'alias': 'frontEnd',
      'skills': {
        'ECMAScript': 10,
        'VUE 2.0': 10,
        'HTML5 / CSS3': 8,
        'TypeScript': 6,
        'WebPack 4': 8,
        'Gulp': 7,
        'RollupJs': 7,
        'Lerna': 5,
        'AMD & CMD': 8,
        'SVG & WebGL':6
      }
    }, 
    {
      'scope': '后端技术',
      'alias': 'backEnd',
      'skills': {
        'PHP': 4,
        'NodeJs': 3,
        'Python': 1,
        'MySql': 3,
        'Redis': 2,
        'MongoDB': 2
      }
    }, 
    {
      'scope': '运维技术',
      'alias': 'devOps',
      'skills': {
        'Shell': 5,
        'Nginx': 6,
        'Ansible': 3,
        'Jenkins': 4,
        'GitLab': 5,
        'Docker': 2
      }
    }
  ],
  mainExperience: [
    {
      'year': '2020',
      'events': [
        '成功研发灵鹊Plus流程应用的前台开发中间件，可在现有ExtJS流程节点老功能里集成VUE开发的功能模块；',
        '应甲方SE求助，在2个月内带领前端10人，在目标时间节点前完成PDMC+产品的前端框架优化和功能重构；',
        '获得甲方评定的外协季度优秀员工；',
        '10月18日，主动申请的离职日，第二日启动减肥计划；',
        '11月09日，成功考取汽车驾驶C证；',
        '12月28日，自定的减肥办法可行有效，成功减掉10斤；',
        '12月12日，个人独立博客站上线；',
        '12月18日，个人简历站上线。',
      ]
    },
    {
      'year': '2019',
      'events': [
        '1月中旬成功戒烟，结束11年的抽烟行为；',
        '基于Webpack和Shell完成DevOpS系统任务节点功能的代替，实现应用包构建优化、自动部署脚本模板等；',
        '基于SVG开发出甲方某系列手机的研发业务流水线大屏项目，受到甲方一级部门领导高度认可；',
        '6月成功被评为深圳事业部前端技术专家，在年中大会时领奖；',
        '8月开始，基于ThreeJs开发甲方南方电商仓的3D智能运营雏形应用；',
        '成功从灵鹊Plus基座应用中剥离行云流程应用前端子工程，实现单独构建和部署；',
        '完成个人VS Code插件的开发，集成了日常使用的代码片段；',
        '成功研发出灵鹊Plus行云模块的流程设计器BPMN2.0协议适配器。',
      ]
    },
    {
      'year': '2018',
      'events': [
        '项目业务发生变革，完成前端VUE开发框架的升级优化，支持多应用的集成开发和独立部署；',
        '协助新立项的项目完成前端框架设计及实现开发，基于React框架，耗时1个半月；',
        '首次在项目中独立业务模块使用TypeScript开发；',
        '基于RollupJs开发出VUE多组件开发脚手架，开源至甲方内网基于Jfrog Artifactory的NPM镜像库中。'
      ]
    },
    {
      'year': '2017',
      'events': [
        '主导项目转型VUE框架开发，独自筹建团队并进行赋能培训，成为所在BG最早采用VUE框架开发的项目；',
        '采用VUE重构项目所有UI及业务组件；',
        '年底公司项目改革，成为首批绩效为S+的员工之一。'
      ]
    },
    {
      'year': '2016',
      'events': [
        '主导筹建UED部门；',
        '基于Gulp研发出公司前端开发脚手架工程，成功在内部前端小组推广使用；',
        '成功完成公司移动APP基础应用框架的开发，第一次系统性采用Gulp + RequireJS模式开发；',
        '11月回深，进入外包行业，入职乙方公司。'
      ]
    },
    {
      'year': '2015',
      'events': [
        '独自在重要推介会前完成公司核心运营平台的前台重构，第一次系统性采用SeaJs/CMD模块化开发；',
        '被委任暂时担任公司产品总监，在其人员暂缺期间代主持其所有工作；',
        '获得公司2015年最佳员工奖。'
      ]
    },
    {
      'year': '2014',
      'note': '（较早年份请查看工作经历和项目经历）',
      'events': [
        '委任为公司技术研发部前端开发组长；',
        '逐步将公司运营平台的UI样式组件套进行重构，采用SeaJs进行模块化封装；',
        '获得公司2014年年度全勤奖。'
      ]
    }
  ],
  workExperience: [
    {
      'company': '深圳软通动力信息技术有限公司',
      'time': '2019年1月 - 2020年10月',
      'position': '主任开发工程师 / 高级前端架构师',
      'post': '前端 SE Leader',
      'rating': '11B (1 ~ 13)',
    },
    {
      'company': '（深圳）武汉佰钧成技术有限责任公司',
      'time': '2016年10月 - 2019年1月',
      'position': '主任开发工程师',
      'post': '前端 SE',
      'rating': '10B (1 ~ 13)',
    },
    {
      'company': '江西金利达电子商务有限公司',
      'time': '2013年11月 - 2016年10月',
      'position': '高级开发工程师 / 产品总监',
      'peopleCount': 200
    },
    {
      'company': '深圳市华企网络科技有限公司',
      'time': '2012年10月 - 2013年9月',
      'position': '全栈开发工程师 / 技术总监',
      'peopleCount': 50
    },
    {
      'company': '深圳市时光鸟信息技术有限公司',
      'time': '2010年10月 - 2012年7月',
      'position': '全栈开发工程师 / 总经理',
      'peopleCount': 30
    },
    {
      'company': '深圳市旭灿电子科技有限公司',
      'time': '2008年8月 - 2009年8月',
      'position': '网站开发工程师、SEO优化专员 / IT负责人',
      'peopleCount': 20
    },
    {
      'company': '深圳市金悦亮光源技术开发有限公司',
      'time': '2007年3月 - 2008年5月',
      'position': 'Flash灯效设计师 / 网络管理员',
      'peopleCount': 300
    }
  ],
  projectExperience: [
    {
      name: '我的简历',
      type: 'private',
      url: 'http://hi.fuxiaoling.com',
      developmentDate: '2020年12月 - 2020年12月',
      introduction: '基于原创设计的简历页面，用于全面、准确展示自己。',
      technologyStack: {
        frontEnd: 'VUE + ES6 + H5 + Stylus + Ant-Design-Vue',
        supportingSystem: 'Pacificrack（VPS） + Cloudflare（CDN） + 宝塔'
      }
    },
    {
      name: '我的独立博客',
      type: 'private',
      url: 'http://blog.fuxiaoling.com',
      developmentDate: '2020年11月 - 2020年12月',
      introduction: `一个单纯的个人编程技术博客，用于记录与鞭策学习，内容主要以前端开发技术为主，涉及后台、运营及其他编程技术。
      从搭建服务器到程序开发完测试上线，除了后台应用是在WordPress基础上根据需求新增表和API接口外，其余的资源服务器、域名、CDN都是新买的，前台代码也是在VUE-Cli新建工程上从零开始写的，耗时约20来天。`,
      technologyStack: {
        backEnd: 'PHP 7.2 + MySql 5.6.49 + JWT + WordPress + REST API',
        frontEnd: 'VUE + ES6 + H5 + Stylus + Ant-Design-Vue + Webpack + HighlightJs',
        supportingSystem: 'Pacificrack（VPS） + Cloudflare（CDN） + 宝塔'
      },
      extendLink: {
        'label': '博客介绍',
        'link': 'http://blog.fuxiaoling.com/#/about/',
      }
    },
    {
      name: 'PDMC+',
      type: 'team',
      developmentDate: '2020年7月 - 2020年10月',
      introduction: '华为内部业务流程管理与设计平台，核心功能为流程设计、流程管理、流程应用、及八大流程资产管理。。',
      technologyStack: {
        backEnd: 'Jalor6 + MyBatis + SpringMVC + Activiti + Mysql + Redis',
        frontEnd: 'VUE + ES6 + H5 + CSS3 + AUI + Webpack + Gulp + Nginx',
        supportingSystem: 'TFS(DevOps需求部分) + 灵龙（持续集成和测试） + 云龙（代码托管）+ WCM（前端应用部署）'
      },
      myJob: {
        daily: '担任前端SE Leader，负责前端组所有管理内容。包括：前端开发进度管理和人员管理、前端核心功能实现的概要设计、前端业务架构的优化及重构、前端核心业务模块或组件的开发实现、前端代码代码审阅及Comitter、前端应用部署负责人。',
        prominent: `提取了各资产模块的公共的业务逻辑，通过订阅消息可在执行上下文前后执行资产对象特定方法，大大减少了前端代码维护工作，提升了代码可靠性；
        优化合并了因为类型维护或lookup产生的多次服务请求，采用批量接口完成统一请求；
        为时2个月的快节奏工作，最后在计划时间内完成，受到了甲方和本公司产品领导的高度赞赏。`
      }
    },
    {
      name: '个人脚手架工具',
      type: 'private',
      developmentDate: '2020年5月 - 2020年5月',
      introduction: '通过NPM安装，安装后注册系统全局PATH别名，可在BASH窗口中通过命令初始化安装自己存放与脚手架中的工程，安装命令支持参数配置。',
      technologyStack: {
        backEnd: 'NodeJs',
        frontEnd: 'ES6'
      },
      extendLink: {
        'label': '详情介绍',
        'link': 'http://blog.fuxiaoling.com/#/series/development-kit-cli/?seriesId=76',
      }
    },
    {
      name: 'VSCODE插件开发框架',
      type: 'private',
      developmentDate: '2019年12月 - 2019年12月',
      introduction: '下班在家开发的一个VSCODE实验插件，后把基础部分进行了提炼优化，采用注册配置+约定的方式方便以后使用。',
      technologyStack: {
        backEnd: 'NodeJs',
        frontEnd: 'Webpack + RollupJs + VUE + ES6 + Gulp'
      },
      extendLink: {
        'label': '详情介绍',
        'link': 'http://blog.fuxiaoling.com/#/series/build-visual-studio-code-plugin/?seriesId=77',
      }
    },
    {
      name: '灵雀Plus - 行云',
      type: 'team',
      developmentDate: '2019年10月 - 2020年7月',
      introduction: `灵雀Plus是华为内部在线IT应用系统构建平台，包括在线上库表管理、线上服务接口逻辑编排及生成、线上原子服务编排应用、线上卡片式应用编排、线上流程设计应用、线上应用部署管理。
      行云是线上流程设计应用模块，主要提供流程设计及引擎服务，以及流程实例接口的调试及管理。`,
      technologyStack: {
        backEnd: 'Jalor6 + MyBatis + SpringMVC + Activiti + Sentinel + Kafka + K8s + Docker + Oracle + MangoDB',
        frontEnd: 'VUE + ES6 + H5 + CSS3 + AUI + SystemJs + Monaco Editor + Webpack + Gulp + Nginx + ExtJs',
        supportingSystem: 'TFS(DevOps) + WCM（前端应用部署）'
      },
      myJob: {
        daily: '人员外包模式，外包不设SE头衔，但我实际负责行云模块的整体前端。包括：外协人员的面试、版本业务需求的设计评定、前端功能实现的概要设计、前端流程设计引擎老功能的优化、前端核心业务模块或组件的开发实现、前端应用构建及部署负责人。',
        prominent: `成功将行云基于ExtJs实现的老流程设计器从灵鹊Plus基座应用中剥离，剥离过程中对文件及资源进行了专门的构建处理，最后实现单独构建和部署；
        成功研发出流程设计器BPMN2.0协议适配器，其他常见流程协议数据格式可以使用行云新流程设计器；
        成功研发出前台开发中间件，可在现有ExtJS老流程设计器的流程节点老功能里集成VUE开发的功能模块，让新老流程设计器安稳进行替换过度，并且可共用VUE部分的功能组件。`
      }
    },
    {
      name: '华为南方电商仓3D智能运营',
      type: 'independently',
      developmentDate: '2019年8月 - 2019年10月',
      introduction: `预研性质项目，旨在通过WebGL的3D方式实时模拟南方电商仓库核心设备的运作情况，数据来源为南方仓库中心系统提供。
      场景中可以查询具体订单商品在仓库中的整个处理过程，场景实时对各设备资源的运行情况进行反馈，关键设备支持详情特写。`,
      technologyStack: {
        backEnd: 'Jalor6 + spring + WebSocke',
        frontEnd: 'VUE + ES6 + H5 + CSS3 + WebGL/ThreeJs + SVG + WebSocket + Webpack + Nginx',
        supportingSystem: 'TFS(DevOps) + WCM（前端应用部署）'
      },
      myJob: {
        daily: '负责货架区、堆垛机、传送带系统、分拣台的四个基本对象的模型制作、事件原型、动画逻辑及其详情场景制作；负责前端应用部署。',
        prominent: `和甲方产品负责人完成整个场景的脚本设计和技术调研，搭建了基于vue + ThreeJs的应用开发框架，独自完成了场景对象角色的各自场景开发工作。`
      }
    },
    {
      name: '华为智慧门店',
      type: 'team',
      developmentDate: '2019年7月 - 2019年8月',
      introduction: `系统为华为在国内所有自营门店的实时运营监控平台，功能包括：单个门店内多层实时的客流热力图反馈，门店所在商业圈的客流辐射，门店的历史销售数据图表、所有门店的销售预览等等。门店监控数据和销售数据来源为其他系统提供。`,
      technologyStack: {
        backEnd: 'Jalor6 + spring + WebSocket',
        frontEnd: 'VUE + ES6 + H5 + CSS3 + SVG + eCharts + WebSocket + Webpack + Nginx',
        supportingSystem: 'TFS(DevOps) + WCM（前端应用部署）'
      },
      myJob: {
        daily: '负责几个核心表图的开发，负责其他开发人员的问题求助支撑，负责前端应用部署。',
        prominent: `搭建开发框架及UI视图框架，使用SVG原生制作商圈辐射图，使用SVG原生制作门店陈列区域的实时人数热力图。`
      }
    },
    {
      name: '华为研发流水线大屏',
      type: 'independently',
      developmentDate: '2019年7月 - 2019年7月',
      introduction: `项目是一个大屏项目，含3个大屏页，是华为武研所某部门接受创始团队领导视察时大屏展示。`,
      technologyStack: {
        backEnd: 'Jalor6 + spring + WebSocke',
        frontEnd: 'VUE + ES6 + H5 + CSS3 + SVG + eCharts + WebSocket + webworker + Webpack',
        supportingSystem: 'WCM（前端应用部署）'
      },
      myJob: {
        prominent: `一人在10天内完成，包括完成一个基于全球地图的复杂的往来动效图，往来动态图是华为国内外各个研究所在研发某系列手机期间的业务往来，每个往来效果都根据实际数据进行计算变化。
        视察结束后甲方负责人受到了一级部门领导的专门称赞。`
      }
    },
    {
      name: 'VUE组件包库开发框架',
      type: 'private',
      developmentDate: '2018年11月 - 2018年11月',
      introduction: '下班在家自研的VUE组件包开发框架，核心功能模块包括：包开发基座模块、自动监听编译模块、自动调试模块、自动部署包库模块。',
      technologyStack: {
        backEnd: 'NodeJs',
        frontEnd: 'Webpack + RollupJs + VUE + ES6 + Gulp'
      },
      extendLink: {
        'label': '详情介绍',
        'link': 'http://blog.fuxiaoling.com/#/series/rollup-development-framework/?seriesId=75',
      }
    },
    {
      name: '华为战略预备队统一训战平台',
      type: 'team',
      developmentDate: '2016年10月 - 2019年7月',
      introduction: '系统为华为内部员工的训战平台，以不同维度业务领域作为预备队，预备队队员可平台可以完成报到、入队、作训、作战、答辩、鉴定、挂牌、派遣等环节业务。',
      technologyStack: {
        backEnd: 'Jalor6 + MyBatis + SpringMVC + Activiti + Was + MySql',
        frontEnd: 'VUE + ES6 + H5 + CSS3 + Webpack + Nginx',
        supportingSystem: 'Jenkins + GitLab + 华为内部资源服务器'
      },
      myJob: {
        daily: `担任前端SE，负责前端组所有管理内容，包括前端开发人员培训工作。
        包括：前端开发进度管理和人员管理、前端核心功能实现的概要设计、前端核心业务模块或组件的开发实现、前端代码代码审阅、前端应用部署负责人。`,
        prominent: `17年3月说服甲方将前端改为VUE框架进行开发重构，独自筹建团队并进行赋能培训，成为所在BG最早采用VUE框架开发的项目；使用VUE重构所有UI及业务组件；
        18年对前端开发工程进行全面升级，同时支持多模块和多应用的开发。`,
      }
    },
    {
      name: '金利达药品交易网',
      type: 'team',
      developmentDate: '2013年11月 - 2016年10月',
      introduction: '国内第三方互联网药品交易服务平台（B2B），整合全国各大医药生产企业、商业公司及全国连锁药店、诊所、医疗机构及各类药品、中药饮片、医疗器械、保健品、健康食品、健康用品等，为全国各类医药相关企业及大众提供全面的互联网医药解决方案。',
      technologyStack: {
        backEnd: 'SpringMVC + MyBatis + Solar + MySql',
        frontEnd: 'Jquery + SeaJs + H5 + CSS3 + Arale + Echarts + Webpack + gulp + Tengine',
        supportingSystem: 'Tower + Jenkins + GitLab + 自有资源服务器'
      },
      myJob: {
        daily: `先是担任前端开发组长，后兼任产品总监。负责前端组的工作管理以及考核评定，同时作为前端开发组长进行日常开发；
        后负责整体产品管理，负责后续产品的从业务需求到实现验收的所有工作管理。`,
        prominent: `在1.0版本中完成产品自有样式组件套资产的开发；
        在2.0版本时期独自重新设计UI及前台代码重构，采用SeaJs/CMD模块化开发，在重要推介会前完成，获得董事长公开表扬;
        在3.0版本时期担任产品总监，对运营模块及国家监管模块系统进行全面的业务设计，包括：交易系统、订单系统、合同系统、支付系统、财务系统、采供角色管理系统、加盟商管理系统;
        基于Gulp研发出公司前端开发脚手架工程，成功在内部前端小组推广使用;
        负责WEB服务器负载优化及应用静态资源combo服务。`,
      }
    },
    {
      name: '药立达APP',
      type: 'team',
      developmentDate: '2016年1月 - 2016年6月',
      introduction: '系统为公司整合现有B2B平台零售药店采购商资源，耗时半年研发的O2O模式的药品销售服务APP，功能为B2B的精简版本。',
      technologyStack: {
        frontEnd: 'requireJs + gulp + Jquery + H5 + CSS3 + Sui + zepto + Tengine',
        supportingSystem: 'Tower + Jenkins + GitLab + 自有资源服务器'
      },
      myJob: {
        daily: `兼任产品总监期间的项目，除产品总监外的工作，一人完成了该APP所有WEB页面的开发。`
      }
    },
    {
      name: '金利达网上药店',
      type: 'team',
      developmentDate: '2014年5月 - 2015年2月',
      introduction: '系统为公司B2B2C的2C业务拓展平台，业务为在线销售包括药品、保健品、医疗器械、化妆品、日用品等品类的健康商品。',
      technologyStack: {
        backEnd: 'SpringMVC + MyBatis + Solar + MySql',
        frontEnd: 'Jquery + SeaJs + H5 + CSS3 + Arale + Echarts + Webpack + gulp + Tengine',
        supportingSystem: 'Tower + Jenkins + GitLab + 自有服务器'
      },
      myJob: {
        daily: `按照要求参与部分需求文档的编写；独立完成整个从UI设计、页面开发、web服务器和静态资源服务器搭建的一条龙工作。`
      }
    },
    {
      name: 'CMS企业建站（超50个，大部分独立完成设计开发部署）',
      type: 'team',
      developmentDate: '2010年10月 - 2013年9月',
      introduction: '<P>2012年10月 - 2013年9月 在朋友公司华企网络科技担任开发总监，同时作为PHP全栈开发人员。</P><P>2010年10月 - 2012年7月 自己开设网络公司，担任总经理同时作为PHP全栈开发人员。</P>'
    }
  ],
  education: [
    {
      'school': '湖北职业技术学院',
      'date': '2003年9月 – 2006年6月',
      'mark': '计算机科学与技术',
    },
    {
      'school': '新余市第七高级中学',
      'date': '2000年9月 – 2003年6月',
      'mark': '理科',
    }
  ]

}
