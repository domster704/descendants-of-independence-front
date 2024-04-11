import {createSlice} from "@reduxjs/toolkit";
import winner_img from "../assets/img/archiveWinnerImg/winner.png";
import {images as winnerImages} from "../winnerImgImports";

// imgIndex - индекс изображения в массиве winnerImages[year][category]
let initialState = {
    filter: {
        active: "science",
        year: 2021,
        filterCategory: {
            science: {children: 'Наука'},
            culture: {children: 'Культура'},
            it: {children: 'Информационные технологии'},
            business: {children: 'Бизнес'},
            media: {children: 'Медиа'},
        }
    },
    winnerCards: {
        2023: {
            science: [],
            culture: [],
            it: [{
                name: "Наумова Динара",
                age: "20 лет",
                region: "Астана",
                project: "ЛФК-кабинет “Life+”",
                purpose: "Помощь людям с ограниченными возможностями",
                status: "Завершен",
                image: winner_img,
                index: 0
            }],
            business: [],
            media: []
        },
        2022: {
            science: [
                {
                name: 'Амирова Аида Зухрабкызы',
                age: '',
                region: '',
                project: '«Life on the Spectrum: Механизмы социальной поддержки детей с расстройствами аутистического спектра и способы их улучшения»',
                purpose: '',
                status: '',
                image: null,
                }, {
                    name: 'ДАУЛЕТИЯ Данияр Дауренұлы',
                    age: '',
                    region: '',
                    project: '«Разработка мобильного робота на основе машинного зрения по обслуживанию сельхоз угодий»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЖАНИКУЛОВ Нурғали Нодырұлы',
                    age: '',
                    region: '',
                    project: '«DENTAL – ZPC» Производство стоматологических цементов, получение новой инновационной продукции, утилизация цинкосодержащих промышленных отходов',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЗАРИПОВ Рамис Юрисович',
                    age: '',
                    region: '',
                    project: '«Разработка мобильного комплекса для очистки водоемов»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ҚАДЫР Гулинур Алымжанқызы',
                    age: '',
                    region: '',
                    project: '«Термоэлектрическое охлаждающее устройство для локального воздействия»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'СЕМБАЕВА Әсел Сулейманқызы',
                    age: '',
                    region: '',
                    project: '«Храм древности: или комплекс курганов с «усами» из каменных гряд»',
                    purpose: '',
                    status: '',
                    image: null,
            }],
            culture: [
                {
                    name: 'АЙДАР Ерасыл Айдарұлы',
                    age: '',
                    region: '',
                    project: '«Цифровизированные 3-х мерные модели историко-культурного наследия Казахстана»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'АМИРХАНОВ Мукагали Анарбекович',
                    age: '',
                    region: '',
                    project: '«Проведение Детского музыкального Республиканского конкурса по домбыре в честь 200-летия Құрманғазы Сағырбайұлы»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'АСҚАРОВА Диана Альжанқызы',
                    age: '',
                    region: '',
                    project: '«Создание мобильной игры по истории Казахстана»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'БАЙТУСОВА Айдана',
                    age: '',
                    region: '',
                    project: 'Инклюзивный театр «Искусство - не ограничивает возможности»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЖАНУЗАКОВА Дина Адилбековна',
                    age: '',
                    region: '',
                    project: '«Тарихты ұрпаққа жеткізу»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'МАМЫРБЕКОВ Ертай Жасболатұлы',
                    age: '',
                    region: '',
                    project: '«Создание вокально-инструментального ансамбля и проведения концерта»',
                    purpose: '',
                    status: '',
                    image: null,
                },],
            it: [
                {
                    name: 'ЖАКИЯНОВА Камиля Кайратовна',
                    age: '',
                    region: '',
                    project: '«iTrip.kz - Разработка единой туристической платформы»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЛАУ Лаура Чоуляновна',
                    age: '',
                    region: '',
                    project: '«ProfED» Маркетплейс профориентаторов и образовательных услуг, а также погружениев профессию через виртуальную реальность',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'МАХАМАДИЁРОВАлишер Махамадиёрулы',
                    age: '',
                    region: '',
                    project: 'Мобильное приложение «Eco Cashback»',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: -1
                }, {
                    name: 'МУХАМБЕТКАЛИЕВАСания Казбековна',
                    age: '',
                    region: '',
                    project: '«TOZBE - мобильное приложение, борющееся с домашним насилием»',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 2
                }, {
                    name: 'РАШИДОВАзат Лаврович',
                    age: '',
                    region: '',
                    project: '«Разработка мобильного приложения 4Tulik (Төрт түлік)»',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 3
                }, {
                    name: 'ТУЛЕНОВАДиляра Андреевна',
                    age: '',
                    region: '',
                    project: '«Производство устройства по автономной дезинфекции воздуха в помещении»',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 4
                },],
            business: [
                {
                    name: 'АБИШЕВ Арафат Аскарович',
                    age: '',
                    region: '',
                    project: '«Прототип настольной игры про Казахское ханство»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'БОТБАЕВА Нұрсая Қырықбайқызы',
                    age: '',
                    region: '',
                    project: '«Получение фосфорных удобрений путем переработки отходов»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЕРЕЖЕП Абылайхан Әбілхасымұлы',
                    age: '',
                    region: '',
                    project: '«Разработка мобильного приложения 4Tulik (Төрт түлік)»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'РАШИДОВАзат Лаврович',
                    age: '',
                    region: '',
                    project: '«Организация кружка по управлению технологиями дронов»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ҚАБДРАСЫЛОВА Мадина Ержанқызы',
                    age: '',
                    region: '',
                    project: '«Центр робототехники на казахском языке»',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: -1
                }, {
                    name: 'МАХАМБЕТ Райымбек Нұрлыбекұлы',
                    age: '',
                    region: '',
                    project: '«Ысырап болмасын»',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 4
                }, {
                    name: 'НАМЕЛБЕК Азамат Намелбекұлы',
                    age: '',
                    region: '',
                    project: '«EcoAlem» Предпринятие первых шагов для решения экологических проблем региона, продавая перерабатываемые твердые бытовые отходы (стекло, пластик, дерево, макулатура, алюминий) перерабатывающим учреждениям.',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 5
                }, {
                    name: 'НҰРЛЫБАЕВ Бексұлтан Болатбекұлы',
                    age: '',
                    region: '',
                    project: '«Туристские скретч-карты «New Kazakhstan»»',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 6
                }, {
                    name: 'РАХИМЖАНОВ Уалихан Қайратұлы',
                    age: '',
                    region: '',
                    project: '«Umai» Проект занимающийся разработкой технологии модульных ферм, а также выращиванием и переработкой выращенных культур в косметические продукты и БАДы',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 7
                }, {
                    name: 'ТАЖИХАНОВ Мардонжон Азаматұлы',
                    age: '',
                    region: '',
                    project: '«ASITE-Инновационные решения в сфере образования» (Advansed Step in IT Education)',
                    purpose: '',
                    status: '',
                    image: null,
                    indexImg: 8
                }],
            media: [
                {
                    name: 'АКТАЕВ Жандос Берикович',
                    age: '',
                    region: '',
                    project: '«QQ.kz (Құқық.кз)» Создание онлайн-курсов (видео формат) по повышению базовой правовой грамотности населения на доступном языке. Размещение курсов на онлайн платформах и распространение через социальные сети',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'АННАСОВА Алия Махсатқызы',
                    age: '',
                    region: '',
                    project: '«Kazakhlib» Написание произведений великих казахских писателей и поэтов на казахском языке в виде комиксов и создание сайта «Kazakhlib», на который будут загружены данные казахские комиксы',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ӘБДІРӘШ Абылайхан Әбдікерімұлы',
                    age: '',
                    region: '',
                    project: '«Менің тәнім-менің жаным» медиа-школа защиты репродуктивного здоровья и повышения половой грамотности',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ӘБУӘЛІ Мұхтарәлі Мұратұлы',
                    age: '',
                    region: '',
                    project: '«EREKSHE – медиа» Создание контента из комиксов на казахском языке, казахским жанром, специально для слабовидящих или вообще незрячих подростков',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЕРБОЛАТОВ Жанибек Елдосович',
                    age: '',
                    region: '',
                    project: '«Skyress Media» - проект по озвучиванию',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ҚҰСАН Еркін Аманкелдіұлы',
                    age: '',
                    region: '',
                    project: '«Ozgese bol: өзіңше болма - студия развития казахского языка»',
                    purpose: '',
                    status: '',
                    image: null,
                },]
        },
        2021: {
            science: [
                {
                    name: 'ОРАЗБЕК Арсен Аленулы',
                    age: '',
                    region: '',
                    project: '«Модификация стандартных штаммов P.putida, проект в области синтетической биологии для конкурса iGEM»',
                    purpose: '',
                    status: '',
                    image: null,
                    imgIndex: 0
                }, {
                    name: 'СМАИЛОВ Кенжегали Маманович',
                    age: '',
                    region: '',
                    project: '«Разработка технологии комплексного извлечения кобальта и никеля из окисленной кобальт-никельсодержащей руды»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'МАШУРОВ Фарух Аркинович',
                    age: '',
                    region: '',
                    project: '«Структурные проблемы специальных алгебр относительно (анти) коммутаторов, (анти) структурные проблемы специальных алгебр, связанных с коммутаторами»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ПІРМАНОВА Күнсұлу Қамбарбекқызы',
                    age: '',
                    region: '',
                    project: '«Разработка лингвостатистики произведений Абая»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ДАУЛЕШЯР Бақытәлі',
                    age: '',
                    region: '',
                    project: '«Разработка биомеханического протеза для рук»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ИВЛЕВ Антон Александрович',
                    age: '',
                    region: '',
                    project: '«Создание информационной системы для анализа и прогнозирования демографических данных»',
                    purpose: '',
                    status: '',
                    image: null,
                    imgIndex: 5
                }],
            culture: [
                {
                    name: 'ТОКСАНБАЕВ Саят Турсынович',
                    age: '',
                    region: '',
                    project: '«Разработка виртуальных 3D туров через создание сайта «VR-TOUR.KZ»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЖУБАНЫШ Руслан Жанбырбайұлы',
                    age: '',
                    region: '',
                    project: '«Организация мероприятий «Тәуел(ді)сіз» (вечер современного искусства, сочетающий песню и танец с поэзией)',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ӘКІМ Думан Нұрлыбекұлы',
                    age: '',
                    region: '',
                    project: '«Организация Международного детско–юношеского театрального фестиваля – конкурса «ТЕАТР-ТВОРЧЕСТВО-ТАЛАНТ»»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'НҰРЛАНҚЫЗЫ Азиза',
                    age: '',
                    region: '',
                    project: '«Создание мультипликационных роликов по мотивам казахских сказок»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'КАЛИВОШКИНА Дарья Владимирован',
                    age: '',
                    region: '',
                    project: '«Экспериментальная археология в области исторической реконструкции каменного и бронзового веков»',
                    purpose: '',
                    status: '',
                    image: null,
                }],
            it: [
                {
                    name: 'ЖАНҰЗАҚ Нұрболат Бауржанұлы',
                    age: '',
                    region: '',
                    project: '«Разработка мобильной платформы «TASKER» по онлайн-продвижению товаров и услуг»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЖАКАЖАНОВА Гаухар Серахметовна',
                    age: '',
                    region: '',
                    project: '«Разработка гибридной платформы «FocusED now-SaaS» для смартфона, интегрированной с мобильным приложением виртуального класса»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ЕРМЕК Марғұлан Мұратұлы',
                    age: '',
                    region: '',
                    project: '«Внедрение программного обеспечения «Aero» по онлайн-мониторингу проведения образовательных экзаменов»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'МҰСА Ақбота Жанатқызы',
                    age: '',
                    region: '',
                    project: '«Совершенствование обучающей платформы «BilimBer» для подготовки к вступительным экзаменам в учебные заведения Казахстана»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ШИХОВ Рузи Турсунмуратович',
                    age: '',
                    region: '',
                    project: '«Разработка мобильного приложения «Donormyn»»',
                    purpose: '',
                    status: '',
                    image: null,
                }],
            business: [
                {
                    name: 'ИБРАЕВ Алишер Серикболович',
                    age: '',
                    region: '',
                    project: '«Разработка «Smart - оросительного устройства», направленное на экономию водных ресурсов в сельском хозяйстве»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'НАУМОВА Динара Рустамовна',
                    age: '',
                    region: '',
                    project: '«Разработка «Smart - оросительного устройства», направленное на экономию водных ресурсов в сельском хозяйстве»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ДҮЙСЕНИ Жасұлан Мұратұлы',
                    age: '',
                    region: '',
                    project: '«Разработка пластиковых изделий методом вакуумной формовки «Vulpis Plastic»»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'РЗАЕВ Азиз Хожагаевич',
                    age: '',
                    region: '',
                    project: '«Разработка гидропонного зеленого корма»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ҚАЛДЫБАЙ Рухия Бердібекқызы',
                    age: '',
                    region: '',
                    project: '«Организация отдыха на передвижном глэмпинге для развития этнотуризма»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ТЫНЫШБЕК Әлиасқар Сайранұлы',
                    age: '',
                    region: '',
                    project: '«Открытие творческой мастерской по реставрации мебели в команде с молодыми художниками «Rehaz»»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'КАЖИМОВА Айдана Жаскайратовна',
                    age: '',
                    region: '',
                    project: '«Разработка биоудобрения на основе технологии переработки отходов»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'КИМ Вячеслав Владимирович',
                    age: '',
                    region: '',
                    project: '«Производство малых архитектурных форм с дополненной реальностью»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'БЕЙСЕНОВ Эздар Серикович',
                    age: '',
                    region: '',
                    project: '«Разработка посуды из биоразлагаемого материала»',
                    purpose: '',
                    status: '',
                    image: null,
                }],
            media: [
                {
                    name: 'АЙДАРХАНОВ Әлиғазы Мирхатұлы',
                    age: '',
                    region: '',
                    project: '«Создание онлайн образовательных видеоуроков «Hi School» на платформе YouTube»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'ӨМІРБЕКОВ Нұрсәт Өміржанұлы',
                    age: '',
                    region: '',
                    project: '«Создание информационного блога по развитию финансовой грамотности «QazFinance»»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'АЛИЕВА Жансая Айсауытовна',
                    age: '',
                    region: '',
                    project: '«Создание подкаста «Quraq podcast» о национальных традициях и культурных событиях в стране»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'САВИЦКИЙ Юлиан Демьянович',
                    age: '',
                    region: '',
                    project: '«Выпуск социального драматического короткометражного фильма «Маяки»»',
                    purpose: '',
                    status: '',
                    image: null,
                }, {
                    name: 'НАМУРАДИН Айсана Қанатқызы',
                    age: '',
                    region: '',
                    project: '«Открытие «Coworking» центра для реализации новых Медиа-проектов и создании познавательного, прикладного, увлекательного контента для молодежи»',
                    purpose: '',
                    status: '',
                    image: null,
                },]
        }
    }
}

Object.keys(initialState.winnerCards).forEach(year => {
    if (!Object.keys(winnerImages).includes(year)) {
        return;
    }

    Object.keys(initialState.winnerCards[year]).forEach(category => {
        if (!Object.keys(winnerImages[year]).includes(category)) {
            return;
        }

        initialState.winnerCards[year][category].forEach((card, index) => {
            if (card?.imgIndex === -1) {
                return;
            }
            if (card.imgIndex === undefined) {
                card.imgIndex = index;
            }
            card.image = winnerImages[year][category][card.imgIndex];
        });
    });
});

const winnerSlice = createSlice({
    name: "winner",
    initialState,
    reducers: {
        /**
         * @param state
         * @param action {{payload: string}}
         */
        setFilterCategoryActive(state, action) {
            state.filter.active = action.payload;
        },
        /**
         * @param state
         * @param action {{payload: number}}
         */
        setFilterYear(state, action) {
            state.filter.year = action.payload;
        }
    }
});

export const {
    setFilterCategoryActive,
    setFilterYear
} = winnerSlice.actions;
export default winnerSlice.reducer;