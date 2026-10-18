import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './styles/ProjectsGallery.module.css';

// Exterior & Backyard
import extSunset from '../../public/imgs/portfolio/ext-sunset.jpg';
import extDaylight from '../../public/imgs/portfolio/ext-daylight.jpg';
import extFront from '../../public/imgs/portfolio/ext-front.jpg';
import extBackyard from '../../public/imgs/portfolio/ext-backyard.jpg';
import extPatio from '../../public/imgs/portfolio/ext-patio.jpg';

// Great Room, Kitchen & Dining
import intGreatroom from '../../public/imgs/portfolio/int-greatroom.jpg';
import intSkylightLiving from '../../public/imgs/portfolio/int-skylight-living.jpg';
import intKitchenIsland from '../../public/imgs/portfolio/int-kitchen-island.jpg';
import intKitchenWide from '../../public/imgs/portfolio/int-kitchen-wide.jpg';
import intDiningBar from '../../public/imgs/portfolio/int-dining-bar.jpg';

// Master Suite, Closets, Hallway & Bathrooms
import intMasterBed from '../../public/imgs/portfolio/int-master-bed.jpg';
import intMasterCloset from '../../public/imgs/portfolio/int-master-closet.jpg';
import intBedroomWindows from '../../public/imgs/portfolio/int-bedroom-windows.jpg';
import intHallway from '../../public/imgs/portfolio/int-hallway.jpg';
import intBathTub from '../../public/imgs/portfolio/int-bath-tub.jpg';
import intBathVanity from '../../public/imgs/portfolio/int-bath-vanity.jpg';
import intBathMarble from '../../public/imgs/portfolio/int-bath-marble.jpg';

// Construction, Framing, Foundation & MEP
import buildFoundation from '../../public/imgs/portfolio/build-foundation.jpg';
import buildVaultedFraming from '../../public/imgs/portfolio/build-vaulted-framing.jpg';
import buildInteriorFraming from '../../public/imgs/portfolio/build-interior-framing.jpg';
import buildPorchFraming from '../../public/imgs/portfolio/build-porch-framing.jpg';
import buildStonePorch from '../../public/imgs/portfolio/build-stone-porch.jpg';
import buildElectricalPanel from '../../public/imgs/portfolio/mep-clean-panel.jpg';

export default function ProjectsGallery() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCompareIdx, setActiveCompareIdx] = useState(0);
  const [compareSlider, setCompareSlider] = useState(50);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const comparePairs =
    lang === 'en'
      ? [
          {
            title: 'Vaulted Great Room · Timber Framing vs. Completed Interior',
            desc: 'Same vantage point: from long-span vaulted ridge framing and VELUX skylight openings to Level 5 smooth drywall and wide-plank white oak flooring.',
            beforeImg: buildVaultedFraming,
            beforeLabel: '🏗️ Framing Stage: Vaulted Rafters & Skylight Wells',
            afterImg: intGreatroom,
            afterLabel: '🏡 Completed: Vaulted Great Room & Open Kitchen'
          },
          {
            title: 'Modern Architectural Front Elevation · Structural Framing vs. Twilight Finish',
            desc: 'From structural porch framing, lath waterproofing, and natural stone veneer to frosted glass garage doors and architectural LED cove lighting.',
            beforeImg: buildPorchFraming,
            beforeLabel: '🏗️ Framing Stage: Porch Structure & Stucco Lath',
            afterImg: extSunset,
            afterLabel: '🏡 Completed: Modern Front Elevation at Dusk'
          },
          {
            title: 'Whole-Home Structural Reconfiguration · Framing vs. Custom Walnut Kitchen',
            desc: 'Engineered load-bearing beam integration removed compartmentalized walls to create a sweeping open-concept kitchen with a mitered waterfall island.',
            beforeImg: buildInteriorFraming,
            beforeLabel: '🏗️ Framing Stage: Load-Bearing Wall Removal & MEP Rough-In',
            afterImg: intKitchenWide,
            afterLabel: '🏡 Completed: Factory-Custom Two-Tone Walnut Kitchen'
          }
        ]
      : [
          {
            title: '挑高斜顶大平层客厅 · 天窗木结构 vs. 完工实景',
            desc: '同一空间实拍：从大跨度斜屋顶木结构、VELUX 采光天窗开洞，到 Level 5 级纯白墙面与白橡木地板完美落成。',
            beforeImg: buildVaultedFraming,
            beforeLabel: '🏗️ 施工中：挑高斜顶木结构与天窗开洞',
            afterImg: intGreatroom,
            afterLabel: '🏡 完工后：挑高天窗客厅与开放式餐厨'
          },
          {
            title: '现代建筑正立面与挑高门廊 · 框架施工 vs. 晚霞落成',
            desc: '从门廊木结构搭设、外墙防水铁丝网与深灰石材贴面，到现代磨砂玻璃车库门与线性迎宾灯带交付。',
            beforeImg: buildPorchFraming,
            beforeLabel: '🏗️ 施工中：门廊木结构与外墙防水基层',
            afterImg: extSunset,
            afterLabel: '🏡 完工后：现代建筑正立面晚霞实景'
          },
          {
            title: '全屋承重结构重构 · 内部框架 vs. 高定双色厨房',
            desc: '打通原有局促隔墙，经结构精算植入承重梁柱，实现客厅、瀑布中岛与餐厅全贯通开阔视野。',
            beforeImg: buildInteriorFraming,
            beforeLabel: '🏗️ 施工中：内部承重框架重构与管线预埋',
            afterImg: intKitchenWide,
            afterLabel: '🏡 完工后：高定胡桃木双色厨房与大平层'
          }
        ];

  const categories =
    lang === 'en'
      ? [
          { id: 'all', name: 'All Real Projects (23)' },
          { id: 'exterior', name: '🏡 Architecture & Landscaping (5)' },
          { id: 'living', name: '✨ Great Room & Custom Kitchen (5)' },
          { id: 'bedbath', name: '🛏️ Primary Suite & Luxury Baths (7)' },
          { id: 'construction', name: '🏗️ Foundation, Framing & MEP (6)' }
        ]
      : [
          { id: 'all', name: '全部实拍案例 (23)' },
          { id: 'exterior', name: '🏡 建筑外观与庭院 (5)' },
          { id: 'living', name: '✨ 挑高客厅与高定餐厨 (5)' },
          { id: 'bedbath', name: '🛏️ 定制主卧与奢石卫浴 (7)' },
          { id: 'construction', name: '🏗️ 地基、木结构与水电实录 (6)' }
        ];

  const portfolioItems =
    lang === 'en'
      ? [
          // Exterior
          {
            id: 1,
            cat: 'exterior',
            img: extSunset,
            tag: 'Front Elevation',
            title: 'Modern Custom Residence at Twilight',
            detail: 'Architectural entry porch with recessed linear LED lighting, frosted glass garage door & hardscape walkway'
          },
          {
            id: 2,
            cat: 'exterior',
            img: extDaylight,
            tag: 'Exterior Architecture',
            title: 'Smooth White Stucco & Warm Cedar Accents',
            detail: 'Weather-resistant architectural stucco paired with warm wood siding and triple casement windows'
          },
          {
            id: 3,
            cat: 'exterior',
            img: extFront,
            tag: 'Entry & Facade',
            title: 'Symmetrical Entry Portico & Black-Frame Glazing',
            detail: 'Clean architectural rooflines integrated with manicured front lawn and modern concrete pavers'
          },
          {
            id: 4,
            cat: 'exterior',
            img: extBackyard,
            imgAlt: 'Backyard Patio',
            tag: 'Outdoor Living',
            title: 'Porcelain Paver Patio & Mature Tree Preservation',
            detail: 'Custom river-rock tree well, hardwood lounging deck, and drought-tolerant California landscaping'
          },
          {
            id: 5,
            cat: 'exterior',
            img: extPatio,
            tag: 'Indoor-Outdoor Flow',
            title: 'Multi-Panel Sliding Glass Doors to Rear Patio',
            detail: 'Expansive black-framed glass sliders connecting the great room directly to backyard entertaining'
          },

          // Living & Kitchen
          {
            id: 6,
            cat: 'living',
            img: intGreatroom,
            tag: 'Vaulted Great Room',
            title: 'Skylit Cathedral Ceiling & Open-Concept Living',
            detail: 'Multiple VELUX skylights, Level 5 smooth walls, and wide-plank European white oak flooring'
          },
          {
            id: 7,
            cat: 'living',
            img: intKitchenIsland,
            tag: 'Factory-Direct Kitchen',
            title: 'Mitered Quartz Waterfall Island & Walnut Cantilever Bar',
            detail: 'In-house fabricated handleless two-tone cabinetry with integrated double wall ovens'
          },
          {
            id: 8,
            cat: 'living',
            img: intSkylightLiving,
            tag: 'Daylight Architecture',
            title: 'Quad Skylight Array & Floating Hearth Wall',
            detail: 'Four overhead skylights paired with full-height sliding doors for abundant natural daylight'
          },
          {
            id: 9,
            cat: 'living',
            img: intKitchenWide,
            tag: 'Chef’s Kitchen',
            title: 'Expansive Culinary Island & Open Sightlines',
            detail: 'Ergonomic workflow designed by our in-house studio for seamless entertaining and daily living'
          },
          {
            id: 10,
            cat: 'living',
            img: intDiningBar,
            tag: 'Dining & Wine Bar',
            title: 'Custom Walnut Credenza & Illuminated Floating Shelves',
            detail: 'Built-in dual-zone wine cooler, quartz countertop, and warm recessed LED shelf lighting'
          },

          // Bedroom & Bathroom
          {
            id: 11,
            cat: 'bedbath',
            img: intMasterBed,
            tag: 'Primary Suite',
            title: 'Primary Bedroom with Custom Walnut Wainscoting',
            detail: 'Factory-crafted walnut headboard wall with indirect warm LED cove lighting and patio access'
          },
          {
            id: 12,
            cat: 'bedbath',
            img: intMasterCloset,
            tag: 'Custom Millwork',
            title: 'Walk-In Dressing Room & Matched Walnut Doors',
            detail: 'Coordinated architectural interior doors and bespoke modular wardrobe cabinetry from our factory'
          },
          {
            id: 13,
            cat: 'bedbath',
            img: intBedroomWindows,
            tag: 'Guest Suite',
            title: 'Sunlit Bedroom with Triple Architectural Windows',
            detail: 'Thoughtful window placement balancing natural garden views, daylight, and privacy'
          },
          {
            id: 14,
            cat: 'bedbath',
            img: intHallway,
            tag: 'Architectural Gallery',
            title: 'Skylit Corridor & Flush-Trim Door Craftsmanship',
            detail: 'Overhead skylight wells eliminate dark hallways while highlighting crisp millwork reveals'
          },
          {
            id: 15,
            cat: 'bedbath',
            img: intBathTub,
            tag: 'Primary Spa Bath',
            title: 'Freestanding Soaking Tub & Frameless Glass Shower',
            detail: 'Textured vertical wall tile, rainfall shower system, and tranquil garden window backdrop'
          },
          {
            id: 16,
            cat: 'bedbath',
            img: intBathVanity,
            tag: 'Modern Bath',
            title: 'Floating Double Vanity & Illuminated Recessed Niche',
            detail: 'Large-format porcelain slab walls, backlit smart mirror, and mitered LED shelving'
          },
          {
            id: 17,
            cat: 'bedbath',
            img: intBathMarble,
            tag: 'Powder Room',
            title: 'Sculpted Natural Marble Vessel Basin & Walnut Vanity',
            detail: 'Bespoke natural stone fabrication paired with precision wall-mounted plumbing fixtures'
          },

          // Construction & MEP
          {
            id: 18,
            cat: 'construction',
            img: buildFoundation,
            tag: '01 · Structural Foundation',
            title: 'Engineered Rebar Grid & Concrete Footing Formwork',
            detail: 'Built strictly to California seismic codes with precision anchor bolts — passed City inspection on first review'
          },
          {
            id: 19,
            cat: 'construction',
            img: buildVaultedFraming,
            tag: '02 · Structural Framing',
            title: 'Long-Span Vaulted Roof Framing & Skylight Curbs',
            detail: 'Executed by our dedicated framing crew using engineered structural ridge beams on an organized jobsite'
          },
          {
            id: 20,
            cat: 'construction',
            img: buildInteriorFraming,
            tag: '03 · Seismic Shear Walls',
            title: 'Interior Load-Bearing Studs & Seismic Bracing',
            detail: 'Precision stud layout, structural hardware, and shear-wall framing for long-term structural integrity'
          },
          {
            id: 21,
            cat: 'construction',
            img: buildPorchFraming,
            tag: '04 · Building Envelope',
            title: 'Entry Porch Framing & Multi-Layer Stucco Waterproofing',
            detail: 'Heavy-duty weather barrier paper and galvanized lath installation to prevent moisture intrusion'
          },
          {
            id: 22,
            cat: 'construction',
            img: buildStonePorch,
            tag: '05 · Stone Masonry',
            title: 'Hand-Set Natural Stone Veneer at Entry Columns',
            detail: 'Installed by our dedicated stone masonry specialists with razor-sharp mitered outside corners'
          },
          {
            id: 23,
            cat: 'construction',
            img: buildElectricalPanel,
            tag: '06 · MEP Infrastructure',
            title: '200A/400A Smart Meter & Main Breaker Panel Upgrade',
            detail: 'Completed by our licensed electrical team with right-angle wire dressing and full Title 24 compliance'
          }
        ]
      : [
          // Exterior
          {
            id: 1,
            cat: 'exterior',
            img: extSunset,
            tag: '建筑外立面',
            title: '现代定制住宅正立面 · 晚霞实景',
            detail: '挑高迎宾门廊线性灯带 · 磨砂透光车库门 · 现代步道景观'
          },
          {
            id: 2,
            cat: 'exterior',
            img: extDaylight,
            tag: '建筑外立面',
            title: '现代白墙与暖木外立面 · 阳光实景',
            detail: '高耐候外墙涂料搭配温暖木纹护墙板与三联竖窗'
          },
          {
            id: 3,
            cat: 'exterior',
            img: extFront,
            tag: '门廊与入户',
            title: '对称式现代门廊与黑框落地窗',
            detail: '极简建筑线条与前院草坪、步石景观一体化交付'
          },
          {
            id: 4,
            cat: 'exterior',
            img: extBackyard,
            tag: '庭院与露台',
            title: '后院石英砖露台与原生绿植景观',
            detail: '保留原生大树并定制鹅卵石树池、实木休闲地台与草坪'
          },
          {
            id: 5,
            cat: 'exterior',
            img: extPatio,
            tag: '后院实景',
            title: '室内外无缝连通推拉门与后院休闲区',
            detail: '超大黑框滑动玻璃门将后院阳光与绿意引入室内'
          },

          // Living & Kitchen
          {
            id: 6,
            cat: 'living',
            img: intGreatroom,
            tag: '挑高大平层',
            title: '挑高斜顶天窗客厅与开放式餐厨全景',
            detail: '多组天窗采光 · Level 5 无瑕纯白墙顶 · 通铺宽幅白橡木地板'
          },
          {
            id: 7,
            cat: 'living',
            img: intKitchenIsland,
            tag: '高定厨房',
            title: '石英石瀑布中岛与胡桃木延伸吧台',
            detail: '定制双色无拉手高柜 · 嵌入式双烤箱与法式多门冰箱'
          },
          {
            id: 8,
            cat: 'living',
            img: intSkylightLiving,
            tag: '采光客厅',
            title: '阵列式采光天窗与悬浮壁炉背景墙',
            detail: '四扇阵列式天窗配合大面积落地推拉门，全天候自然通透'
          },
          {
            id: 9,
            cat: 'living',
            img: intKitchenWide,
            tag: '餐厨一体',
            title: '开放式厨房中岛与全景生活动线',
            detail: '资深建筑设计团队优化餐厨动线，兼顾中西烹饪与家庭社交'
          },
          {
            id: 10,
            cat: 'living',
            img: intDiningBar,
            tag: '餐厅与水吧',
            title: '餐厅定制胡桃木酒柜与悬浮发光层板',
            detail: '内嵌恒温酒柜、石英石台面与极简球形壁灯细节'
          },

          // Bedroom & Bathroom
          {
            id: 11,
            cat: 'bedbath',
            img: intMasterBed,
            tag: '主卧套房',
            title: '阳光主卧 · 胡桃木半高护墙板与隐藏灯带',
            detail: '定制木作护墙板暗藏暖光漫反射灯带，直通后院露台'
          },
          {
            id: 12,
            cat: 'bedbath',
            img: intMasterCloset,
            tag: '定制木作',
            title: '主卧步入式衣帽间与实木双开门',
            detail: '全屋同色系胡桃木定制内门与模块化收纳系统'
          },
          {
            id: 13,
            cat: 'bedbath',
            img: intBedroomWindows,
            tag: '次卧实景',
            title: '三联景观竖窗卧室与温润木地板',
            detail: '精准开窗比例兼顾私密性与室外绿植借景'
          },
          {
            id: 14,
            cat: 'bedbath',
            img: intHallway,
            tag: '天窗走廊',
            title: '天窗采光走廊与极简平开门工艺',
            detail: '走廊顶部植入采光天窗，消除传统长走廊暗区'
          },
          {
            id: 15,
            cat: 'bedbath',
            img: intBathTub,
            tag: '主卫奢享',
            title: '独立式浸浴浴缸与无框玻璃淋浴房',
            detail: '竖纹肌理墙砖、顶喷花洒与芭蕉绿植窗景相映成趣'
          },
          {
            id: 16,
            cat: 'bedbath',
            img: intBathVanity,
            tag: '现代卫浴',
            title: '双台盆悬浮浴室柜与发光壁龛层板',
            detail: '微水泥质感大板墙砖、LED 背光智能镜与内嵌灯带层板'
          },
          {
            id: 17,
            cat: 'bedbath',
            img: intBathMarble,
            tag: '客卫细节',
            title: '天然奢石台上盆与胡桃木悬浮柜',
            detail: '极具雕塑感的大理石一体盆，展现水电与木作收口功力'
          },

          // Construction & MEP
          {
            id: 18,
            cat: 'construction',
            img: buildFoundation,
            tag: '01 · 地基工程',
            title: '高Redirects 钢筋混凝土地基与模板支护'.replace('高Redirects ', '高标准'),
            detail: '严格按照加州建筑结构规范绑扎钢筋与锚栓定位，一次性通过 City 验收'
          },
          {
            id: 19,
            cat: 'construction',
            img: buildVaultedFraming,
            tag: '02 · 木结构工程',
            title: '大跨度挑高斜屋顶木结构与 VELUX 天窗安装',
            detail: '自营木工大工精准排布屋面椽条与结构主梁，工地整洁规范'
          },
          {
            id: 20,
            cat: 'construction',
            img: buildInteriorFraming,
            tag: '03 · 内部框架',
            title: '全屋内部承重立柱与斜撑抗震结构实拍',
            detail: '高标准木作立柱间距与抗震剪力墙施工，结构稳如泰山'
          },
          {
            id: 21,
            cat: 'construction',
            img: buildPorchFraming,
            tag: '04 · 外墙防水',
            title: '门廊结构搭建与外墙 Stucco 防水铁丝网施工',
            detail: '多层防水呼吸纸与金属拉网工艺，杜绝外墙渗水与开裂隐患'
          },
          {
            id: 22,
            cat: 'construction',
            img: buildStonePorch,
            tag: '05 · 石材幕墙',
            title: '入户门廊深灰天然石材精工铺贴',
            detail: '专业石材团队手工对缝铺贴，阳角收口笔直利落'
          },
          {
            id: 23,
            cat: 'construction',
            img: buildElectricalPanel,
            tag: '06 · 电气工程',
            title: '200A/400A 主电表箱与规范化强电排线',
            detail: '专业电气团队操刀，走线横平竖直、回路标识清晰，符合 Title 24 规范'
          }
        ];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.cat === activeCategory);

  const currentPair = comparePairs[activeCompareIdx];

  return (
    <section id="projects" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBox}>
          <div className={styles.subBadge}>
            {lang === 'en'
              ? 'MSZ CONSTRUCTION · VERIFIED PROJECT PORTFOLIO'
              : 'MSZ CONSTRUCTION · 真实工程全纪实'}
          </div>
          <h2 className={styles.mainTitle}>
            {lang === 'en'
              ? 'From Rebar Foundations & Timber Framing to Luxury Finishes'
              : '从钢筋地基、木结构框架到精装落成'}
          </h2>
          {lang === 'en' ? (
            <p className={styles.desc}>
              Every photograph below is captured directly from <strong>MSZ Construction’s Bay Area jobsites</strong>. Beyond our finished interiors, we proudly showcase the structural rebar foundations, vaulted timber framing, and code-perfect electrical panels behind the walls.
            </p>
          ) : (
            <p className={styles.desc}>
              以下全部为 <strong>MSZ Construction 湾区真实项目现场实拍</strong>。我们不仅展示完工后的惊艳效果，更敢于把隐蔽在地下的钢筋地基、墙体内的木结构框架与配电箱布线公开呈现。
            </p>
          )}
        </div>

        {/* Part 1: Interactive Real Project Before/After (Construction vs. Completed) */}
        <div className={styles.compareShowcaseCard}>
          <div className={styles.compareTopBar}>
            <div className={styles.compareInfo}>
              <span className={styles.compareBadge}>
                {lang === 'en' ? 'SAME-ANGLE TRANSFORMATION' : '同角度实拍对比'}
              </span>
              <h3 className={styles.compareTitle}>{currentPair.title}</h3>
              <p className={styles.compareDesc}>{currentPair.desc}</p>
            </div>
            <div className={styles.compareSwitchBtns}>
              {comparePairs.map((pair, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.pairBtn} ${activeCompareIdx === idx ? styles.pairBtnActive : ''}`}
                  onClick={() => {
                    setActiveCompareIdx(idx);
                    setCompareSlider(50);
                  }}
                >
                  {lang === 'en' ? `Scene 0${idx + 1}` : `场景 0${idx + 1}`}
                </button>
              ))}
            </div>
          </div>

          <div
            className={styles.compareViewport}
            onMouseMove={(e) => {
              if (e.buttons === 1) {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100));
                setCompareSlider(pos);
              }
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100));
              setCompareSlider(pos);
            }}
          >
            {/* Completed Image (Right / Base) */}
            <img
              src={currentPair.afterImg}
              alt={currentPair.afterLabel}
              className={styles.compareImg}
              draggable={false}
            />
            <div className={styles.afterPill}>{currentPair.afterLabel}</div>

            {/* Construction Image (Left / Clipped) */}
            <div
              className={styles.beforeClip}
              style={{
                clipPath: `polygon(0 0, ${compareSlider}% 0, ${compareSlider}% 100%, 0 100%)`
              }}
            >
              <img
                src={currentPair.beforeImg}
                alt={currentPair.beforeLabel}
                className={styles.compareImg}
                draggable={false}
              />
              <div className={styles.beforePill}>{currentPair.beforeLabel}</div>
            </div>

            {/* Slider Handle */}
            <div className={styles.compareDivider} style={{ left: `${compareSlider}%` }}>
              <div className={styles.compareHandle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m15 18 6-6-6-6M9 6l-6 6 6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Category Filter Tabs */}
        <div className={styles.filterBar}>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === c.id ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Part 3: Clean White Architectural Photo Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={styles.galleryCard}
              onClick={() => setLightboxIndex(index)}
            >
              <div className={styles.imgBox}>
                <img src={item.img} alt={item.title} className={styles.cardImg} loading="lazy" />
                <span className={styles.cardTag}>{item.tag}</span>
                <div className={styles.zoomHint}>
                  {lang === 'en' ? 'Click to Enlarge' : '点击查看大图'}
                </div>
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardDetail}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for High-Res Inspection */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className={styles.lightboxOverlay} onClick={() => setLightboxIndex(null)}>
            <div className={styles.lightboxModal} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={() => setLightboxIndex(null)}
              >
                ✕
              </button>
              <div className={styles.lightboxImgWrap}>
                <img
                  src={filteredItems[lightboxIndex].img}
                  alt={filteredItems[lightboxIndex].title}
                  className={styles.lightboxImg}
                />
              </div>
              <div className={styles.lightboxFooter}>
                <div>
                  <span className={styles.lightboxTag}>{filteredItems[lightboxIndex].tag}</span>
                  <h3 className={styles.lightboxTitle}>{filteredItems[lightboxIndex].title}</h3>
                  <p className={styles.lightboxDesc}>{filteredItems[lightboxIndex].detail}</p>
                </div>
                <div className={styles.lightboxNav}>
                  <button
                    type="button"
                    className={styles.navBtn}
                    onClick={() =>
                      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
                    }
                  >
                    {lang === 'en' ? '← Prev' : '← 上一张'}
                  </button>
                  <span className={styles.pageCount}>
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                  <button
                    type="button"
                    className={styles.navBtn}
                    onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
                  >
                    {lang === 'en' ? 'Next →' : '下一张 →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
