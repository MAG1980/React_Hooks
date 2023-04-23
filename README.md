Конспект лекций

Передача функции в сеттер хука useState в качестве аргумента позволяет всегда работать с актуальным значением,
хранящимся в state, в том числе, при выполнении асинхронных операций.
Если новое значение state звисит от предыдущего,
то в сеттер хука useState лучше передавать callback в качестве аргумента.
Callback сеттера при этом должен быть чистой функцией.

Для ленивой инициализации useState нужно использовать callback, возвращающий функцию инициализации:
const [date, setData] = useState(()=>someHeavyFunc())
Благодаря тому, что someHeavyFunc() возвращается callback-функцией, она будет вызываться только при первом рендере,
а при повторных рендерах будет использовано ранее вычисленное значение.
Ленивая инициализация useState позволяет избежать повторных вычислений результата функции при повторных рендерах.

Чтобы принудительно вызвать ререндер компонента без изменения данных, можно воспользоваться хуком useState:
const [trigger, setTrigger] = useState({})
const rerender = ()=>{setTrigger({})}
Вызов функции rerender будет каждый раз помещать в state каждый раз новый пустой объектный литерал (имеющий другую
сылку),
что будет вызывать повторную отрисовку UI.

Хуки позволяют решать те же проблемы, что и HOC, но без необходимости добавления дополнительных элементов в DOM,
что положительно влияет на производительность.

Пользовательский хук - это функция, которая содержит повторно используемую логику компонента.
Внутри пользовательских хуков можно использовать стардартные хуки и другие пользовательские хуки.

Создание функций, которые возвращают callback, позволяет не использовать анонимный callback в JSX и сделает код более
аккуратным:
const OnChange = (setter) => {
return (event) => {
const {value} = event.target.value
setter(value ? parseFloat(value) : 0)
}
}

<input onChange = {OnChange(setA)} />


Для сохранения функции в state используем callback,
возвращающий функцию, но не вызываем её (callback возвращает ссылку на функцию)
const [action, setAction] = useState(() => add);

Чистая функция всегда возвращает один и тот же результат для одинаковой комбинации входных параметров.
Также, функция не является чистой, если она изменяет значения переменных во внешней области видимости.

Сайд-эффект - это изменение функцией значений переменных во внешнем scope.
Всё, что изменяет результат, возвращаемый функцией с течением времени - это сайд-эффект.
Сайд-эффекты возникают при взаимодействии функции с внешним контекстом - с DOM, API и т.п..

React основан на функциональном и декларативном программировании.
Декларативный подход в React позволяет нам описывать что должно быть отображено,
а не как оно должно быть отображено (без описания строгой последовательности действий).

useEffect позволяет абстрагировать чистую функцию логики компонента от сайд-эффектов бизнес-логики.
Сайд-эффекты, реализованные с помощью useEffect не блокируют рендеринг UI, что делает его более отзывчивым и улучшает
UX.

Если всё же необходимо выполнить сайд-эффект синхронно, следует использовать хук useLayoutEffect.

В массиве зависимостей useEffect перечисляются имена переменных, изменение которых будет вызывать срабатывание эффекта.

Сайд-эффекты должны быть изолированы друг от друга для облегчения восприятия кода и упрощения рефакторинга.
Для каждого блока кода, связанного единой логикой, положено создавать отдельный useEffect
даже если уже существует другой useEffect, имеющий такой же массив зависимостей.

Если функция сайд-эффекта повторно не используется, то её следует объявлять внутри useEffect (в его области видимости),
чтобы уменьшить количество его зависимостей.
Это позволит не задумываться о том, сохраняется ли ссылка на функцию-обработчик или нет.

В отличие от некоторых методов жизненного цикла классовых компонентов
useEffect срабатывает только после окончания рендеринга компонентов, чтобы не блокировать UI.
Это вызывает небольшую задержку в отображении результатов работы сайд-эффекта.

В приложениях все взаимодействия с API должны происходить внутри useEffect.

Хук useEffect() обычно используется для операций асинхронной выборки данных в приложениях React.
Однако функция useEffect() запускается и извлекает данные при каждом рендеринге,
и в большинстве случаев, она продолжает загружать одни и те же данные.
В качестве решения мы можем использовать библиотеку React Query для кэширования данных ответа.
Когда мы делаем вызов API, React Query сначала возвращает данные из кеша, прежде чем продолжить запрос.
Затем, она извлекает данные с сервера и, если новых данных нет, предотвращает повторный рендеринг компонента.

Первый параметр (callback), передаваемый в useEffect не может быть асинхронным,
поэтому при вызове функции, возвращающей Promise, приходится оборачивать её в асинхронный callback.

Сallback хука useEffect может возвращать функцию очистки (clean up function),
которая используется для отмены подписки на события.
Если не запланировать очистку, то слушатели событий, созданные useEffect,
останутся в оперативной памяти даже после того, как компонент будет демонтирован,
что приведёт к снижению производительности приложения.

Функция очистки useEffect вызывается перед размонтированием компонента, а также перед каждым срабатыванием сайд-эффекта.
Т.е. перед выполнением кода текущего сайд-эффекта выполняется код очистки предыдущего сайд-эффекта.
Таким образом React подготавливает почву и очищает state.

Если массив зависимостей useEffect пуст, то сайд-эффект будет срабатывать только один раз - при монтировании,
а функция очистки - при размонтировании компонента.

Методы жизненного цикла классового компонента выполняются синхронно во время рендеринга,
а сайд-эффекты useEffect выполняются асинхронно после окончания рендеринга и не блокируют рендер UI.

При использовании классового компонента логика сайд-эффекта будет разбросана в нескольких методах жизненного цикла,
а при использовании useEffect она будет сосредоточена в одном месте.

Если в useEffect не указать массив зависимостей, то сайд-эффект будет выполняться после каждого рендера.
На практике useEffect используется, если требуется выполнить какое-либо действие асинхронно после каждого рендера.

useEffect выполняется асинхронно после окончания рендеринга.
При работе с тяжёлыми компонентами при использовании useEffect могут возникать недопустимые задержки в отображении
сайд-эффектов.
В этом случае и если требуется синхронное срабатывание сайд-эффекта,
необходимо применять хук useLayoutEffect.
Хук useLayoutEffect после окончания рендера вызывает ещё один рендер,
который выполняется сразу же за первым прежде, чем новое состояние будет отрисовано.

В большинстве случаев используется useEffect.
useLayoutEffect используется в основном,
когда сайд-эффект обращается напрямую к DOM, например через ref,
и требуется устранить неконсистентное (несогласованное) состояние.

Мемоизация - оптимизация, которая заключается в запоминании результатов сложных вычислений.
Хук useMemo возвращает значение, ссылка на которое сохраняется между рендерами.
Не стоит преждевременно и без острой необходимости использовать хук useMemo,
т.к. мемоизация создаёт накладные расходы,
а в большинстве случаев React самостоятельно справляется с оптимизацией.

Для вызова методов дочерних компонентов напрямую может использоваться императивный стиль
с помощью хука useRef, который возвращает объект-контейнер,
содержимое которого будет сохраняться в течение всего времени жизни компонента.

Для связывания ref-контейнера с элементами React в JSX используется атрибут ref.
После связывания контейнера с элементом, в объекте-контейнере появляется свойство current.
через которое можно получить доступ к свойствам связанного элемента.

Хук useRef возвращает контейнер для любого изменяемого значения,
доступ к которому можно получить через свойство current.
В useRef можно хранить что угодно. Он является аналогом свойств классового компонента.

Атрибут ref может принимать callback,
который принимает параметром ссылку на текущий элемент.
Это позволяет сохранить ссылки на все input в массиве, хранимом в useRef,
по ключу элемента массива, полученного через props.

Разница с хуком useState заключается в том,
что изменение значения useRef не вызывает ререндер компонента.

В отличие от метода componentDidUpdate(), хук useRef() cрабатывает и на первый ренедер.

Хук useCallback применяется для мемоизации функции,
который в качестве параметров принимает callback и массив зависимостей,
при изменении которых ссылка на callback будет обновлена.

Хук useImperativeHandle предоставляет родительским компонентам для использования ref.
Как всегда, в большинстве случаев следует избегать императивного кода с использованием ссылок.
useImperativeHandle следует использовать с React.forwardRef,
поэтому для его использования перед экспортом компонента его необходимо обернуть
в хук forwardRef и экспортировать по умолчанию.
В результате этого React передаст в родительский компонент ссылку на ref,
используя которую можно вызывать методы у элемента, на который указываетс ссылка.
Для этого из родительского компонента эту ссылку нужно обратно передать в дочерний
с помощью атрибута ref.
Тогда в самой функции дочернего компонента доступ к ref можно получить через второй параметр,
(следующий после объекта props).
useImperativeHandle принимает в качестве параметров ref, callback и массив зависимостей.
ref получаем из второго параметра компонента (идущего после props).
Callback возвращает объект,
в котором перечисляются методы, которые станут доступны через ref.current[метод].
Теперь мы можем вызвать метод focus(), возвращённого callback хука useImperativeHandle,
извне (из родительского компонета):  ref.current?.focus()
Такой подход позволяет открыть наружу (родительскому компоненту) не все методы элемента,
на который ссылается ref,
а только те, которые нам нужно (мы перечисляем их в callback хука useImperativeHandle).

Использовать императивный подход следует только в крайнем случае.
Например, если уже имеется императивный API, или с эффектами, привязанными к временной шкале,
а не к состоянию компонента, например - анимациями.

В общем случае хук forwardRef используется для того,
чтобы передать входящий ref дочернему компоненту.

Следует стремиться минимизировать использования ref-ов в проектах, т.к. изменяют структуру дерева компонентов.
В то же время работа ref может быть легко нарушена изменением структуры дерева компонентов.

Не все сторонние библиотеки поддерживают работу с ref.

Компонент высшего порядка (High Order Component) - это функция, которая в качестве параметра принимает компонент
и возвращает новый компонент, созданный на основе входящего, но с добавлением дополнительной логики.
HOC можно назвать фабрикой (фабричный метод для создания новых компонентов).

HOC в качестве параметра принимает исходный компонент и
возвращает функцию,
которая в качестве параметров получает объект props,
реализует добавляемую бизнес-логику и
возвращает исходный компонент с переданным в него props (${...props}).
До появления хуков использование HOC было одним из основных способов переиспользования
бизнес-логики между компонентами.
В настоящее время удобнее использовать хуки.
Хуки обеспечивают более высокую производительность.

Если требуется передать ref внутрь HOC. то функцию-обёртку, возвращаемую HOC,
следует обернуть в хук forwardRef.
В функцию-обёртку вторым параметром (после props) следует передать ref,
который нужно передать в атрибут ref оборачиваемого компонента.

Продвинутые хуки

Мемоизация позволяет вашему коду перерисовывать компоненты только в случае изменения свойств.
Понимание этого поможет избежать ненужного рендеринга и снизить вычислительную нагрузку в приложениях.

React предоставляет два хука для реализации мемоизации: useMemo() и UseCallback().

Весь код, написанный в теле компонента будет исполняться при каждом рендере (ведь это обычная функция).
Все литералы объектов и массивов
а также функции-обработчики событий будут пересоздаваться при каждом рендере,
что приведёт к утечке памяти и снижению производительности.

Если что-то создаётся на каждую итерацию цикла, желательно это оптимизировать и применить мемоизацию.

Хук useCallback следует применять при передаче callback оптимизированным дочерним компонентам,
которые полагаются на равенство ссылок, для предотвращения ненужных рендеров.
Под оптимизированными компонентами понимаются компоненты, созданные с помощью хука React.memo.
React.memo является аналогом PureComponent.

В React ререндеринг родительского компонента приводит к ререндерингу всех его дочерних компонентов.
Если дочерний компонент обернуть в хук React.memo,
то при ренедеринге родительского компонента и неизменных props дочернего компонента
ререндеринг дочернего компонента не произойдёт.
Если в качестве props в дочерний компонент передаётся функция,
то следует стремиться сохранить ссылку на неё неизменной между рендерами и изменять её только при изменении
зависимостей.
Эту проблему позволяет решить хук useCallback.

В отличие от React.memo, хук useCallback не кэширует результат,
а сохраняет ссылку на callback между рендерами.
В useCallback следует обернуть функцию-обработчик события, если она передаётся дочерним компонентам через props.
Вторым параметром useCallback принимает список зависимостей,
при изменении которых будет создана новая ссылка на callback.
При пустом списке зависимостей ссылка на callback будет всегда одной и той же.

Основной и самый частый сценарий использования хука useCallback - ренедеринге списков с большим количеством элементов.

При использовании хука useCallback Callback-функция, как и массив зависимостей,
всё равно будут создаваться заново при каждом рендере.
Кроме того, хук useCallback будет проверять, изменился ли массив зависимостей с момента предыдущего рендера.
Это приведёт к увеличению объёма производимых вычислений.
Поэтому, оборачивать в useCallback каждую функцию не стоит, т.к. это усложнит код и может ухудщить производительность.

Преждевременная оптимизация - это зло, т.к. у неё есть своя цена.

Прежде чем начинать оптимизацию необходимо получить объективные метрики,
например, исследовать код в Profiler.

Использование React Fragments позволяет уменьшить время рендеринга и использование памяти.

Стандартное поведение React достаточно оптимизировано.
Дерево компонентов, написанных на хуках, будет меньше, чем при использовании классовых компонентов.

Если состояние компонента изменилось, то по-умолчанию считается, что все его дочерние компоненты также нуждаются в
перерисовке.
Это особенность алгоритма сравнения Virtual DOM в React.
Это допущение сделано в целях оптимизации:
для того, чтобы не тратить время на сравнение предыдущих и текущих значениий props дочерних элементов.
Алгоритм сравнения Virtual DOM в React является эвристическим.
Эвристический алгоритм - алгоритм решения задачи, включающий практический метод,
не являющийся гарантированно точным или оптимальным, но достаточный для решения поставленной задачи.
Позволяет ускорить решение задачи в тех случаях, когда точное решение не может быть найдено.

Хук useMemo первым параметром принимает callback, который, например, может возвращать объект,
а вторым параметром - массив зависимостей, при изменении которых callback должен быть вызван заново,
при отсутствии изменений значений переменных в списке зависимостей,
ссылка на результат, который возвращает callback useMemo, остаётся неизменной между рендерами.

Callback хука useMemo, например, может вернуть массив, который возвращает хук useState,
что позволит мемоизировать не только значение, но и сеттер для его изменения.
Этот подход применяется с хуком useContext.

Хук useMemo позволяет мемоизировать props компонентов (напрмер, дочерних).
Но эвристический алгоритм сравнения React по-умолчанию будет вызывать ререндер дочерних компонентов
при ререндере родительского.
Чтобы этого избежать, нужно сообщить React, что дочерний компонент является оптимизированным.
Чтобы для принятия решения о необходимости ререндара дочернего компонента при реренде родительского
React стал сравнивать предыдущие и текущие значения props дочернего компонента,
нужно дочерний компонент обернуть в memo (React.memo()).
React.memo первым параметром принимает callback, возвращающий компонент React,
а вторым параметром в него можно передать функцию сравнения предыдущего состояния с текущим,
если требуется какая-то специфическая логика сравнения.

Прибегать к мемоизации следует только в случае наличия проблем с производительностью.
Преждевременная оптимизация вредит производительности приложения.

JSX - это синтаксический сахар.
Транспайлер (например, Babel) преобразует JSX разметку в цепочку вызовов
React.createElement(Component,{...props}, children).
В конечном итоге всё дерево элементов React представляет собой цепочку вызовов React.createElement().

JSX удобнее для восприятия человеком.
Чтобы отрендерить компонент React не требуется JSX.

Компонент React - это тип: функция или класс, содержащие инструкции для рендера, а также могут инкапсулировать state.
Элемент React - примитивные строительные блоки, из которых собирается снепшот текущего дерева элементов,
как кадр фильма. Элементы иммутабельны - после создания невозможно изменить их атрибуты или потомков.
Это ещё не элементы DOM (с ним они ничего общего не имеют).
Элементы React - это абстрация - легковесные объекты JavaScript, из которых React собирает Virtual DOM.

На каждый рендер корневой компонент React возвращает дерево React элементов.
Создание React элементов - это довольно быстрый процесс, в сравнении с работй с DOM.
Результатом вызова функции рендера является новое дерево элементов,
которое потом сравнивается с предыдущим деревом элементов.
Этот процесс называется согласование или reconcilation.
Другими словами, React держит в уме своё представление о дереве элементов (Virtual DOM).
Сначала все изменения применяются к нему (Virtual DOM)
(это происходит очень быстро в связи с использованием легковесных абстаций (React элементов)),
и только потом изменения вносятся в реальный DOM (этим занимается библиотека ReactDOM).

ReactDOM.render(
<RootComponent content={content} />,
document.getElementById('root')
)

Метод render библиотеки ReactDOM переносит Virtual DOM (виртуальное дерево элементов) в tag с id='root' реального DOM.

Библиотека ReactDOM служит для работы с браузерным API, ReactNative - с мобильным
(для IOS и Android используются нативные для каждой OS виджеты).

React предоставляет декларативный API.
Благодаря этому не стоит беспокоиться о том, какие изменения происходят при каждом обновлении.
Это значительно упрощает написание приложений, несмотря на то, что процесс рендеринга не всегда очевиден.
Чтобы лучше понимать, как происходит рендеринг,
нужно относиться к нему как к процессу создания нового дерева элементов,
которое потом будет сравниваться с предыдущим.
Чтобы отследить что и когда рендерится в приложении можно использовать расширения для браузера или использовать
логирование рендеров.

Данные в React-приложении обычно передаются сверху вниз с помощью props.
Исключенимем являются глобальные данные, которые могут требоваться в нескольких компонентах на самых разных уровнях
дерева.
Чтобы предоставить общий state нескольким компонентам, необходимо поднять его в компонент,
который в дереве компонентов располагается выше них.
При таком подходе, если какое-то состояние нам необходимо практически в любом компоненте,
то его придётся разместить в корневом компоненте и передавать с помощью props через все уровни компонентов,
что нежелательно (могут возникнуть ошибки, код трудно читать).

Хук useContext позволяет организовать единое хранилище данных с лёгким доступом из любого компонента.
Чтобы предоставить нескольким компонентам доступ к общему состоянию,
необходимо импортировать из react функцию createContext и создать контектс в отдельном файле:
const ThemeContext = createContext()
Из него же можно экспортировать компонент-обёртку для удобного использования контекста в приложении.
В компоненте-обёртке мы создаём state, который будем передавать дочерним компонентам.
Мемоизируем созданный state с помощью хука useMemo:
const [theme, setTheme] = useState(Theme.GREEN);
const value = useMemo(() => {
return [theme, setTheme]
}, [theme])

Этот компонент-обёртка должен возвращать свойство Provider контекста, ранее созданного с помошью createContext:
return <ThemeContext.Provider value={value} {...props} />

Доступ к данным, хранящимся в контексте, предоставляется с помощью useContext(Название ранее объявленного контекста);
const theme = useContext(ThemeContext);

Не обязательно использовать один глобальный контекст на всё приложение.
Контекст может быть приведён к части дерева компонентов (ветви).
В один контекст желательно объединять данные, связанные по смыслу.
State должен находится максимально близко к тому месту, где он будет использован.

Помещать в store Redux все даныые приложения и не использовать state компонента - большая ошибка,
потому что отловить ошибки в таком проекте будет очень сложно,
кроме того, любое изменение в store влечёт за собой ререндер всех компонентов, которые связаны со store.
Не следует подключать менеджер состояний, если можно обойтись хуками React.

                !!!!!!!!Это очень мощный паттерн!!!!!!!!

В связке с useContext часто используют хук useReducer.

useReducer - это более сложная и продвинутая версия хука useState.
useReducer предназначен для хранения state с более сложной структурой:
массив объектов или один объект с большим количеством полей.
Использование useReducer облегчает процесс тестирования
и делает процесс изменения state более прозрачным и предсказуемым.

Хук useReducer возвращает массив
из переменной, в которой хранится текущее состояние и функции dispatch (для изменения состояния при помощи action):
const [state, dispatch] = useReducer(reducer, initialState, init);
В отличие от сеттера dispatch принимает не новое состояние, а объект action, который может иметь payload.

Для ленивой инициализации можно в useReducer передать функцию init в качестве третьего аргумента.
Начальное состояние будет установлено равным результату вызова init(initialArg).

function init(initialCount) {
return {count: initialCount};
}
Это позволяет извлечь логику для расчёта начального состояния за пределы редюсера.
Это также удобно для сброса состояния позже в ответ на действие.

Типы actions нужно хранить в констатах, чтобы измбежать ошибок, вызванных опечатками.

Сам reducer - это чистая функция, которая принимает объект action (действие, возможно, с payload)
и возвращает новое состояние, например:

function reducer(state, action) {
switch (action.type) {
case Types.INCREMENT:
return {
...state, count: state.count + 1
}
case Types.DOUBLE:
return {
...state, count: state.count * 2
}
case Types.CLEAR:
return initialState
default:
console.log(`action type: ${action.type} was not recognized`)
return state
}
}

С помощью хука useDebugValue
можно отобразить дополнительные данные для любого пользовательского хука в ReactDevTools.
Вкладка Components - аналог Elements.
Вкладка Profiler позволяет делать замеры производительности.
Profiler следует использовать для оптимизации производительности приложения.

useDebugValue(value) принимает параметром value, которое можно будет увидеть в ReactDevTools.
Вторым параметром в useDebugValue можно передать функцию форматирования,
например, для форматирования даты или выполнения сложных вычислений,
которая будет вызвана только когда разработчик откроет консоль (ленивая инициализация).

Разработчики React не рекомендуют использовать useDebugValue для каждого пользовательского хука,
хотя это бывает полезно во время отладки приложения.
Это следует делать для общих модулей или библиотек хуков.

    Фабрика хуков

Фабрика (Factory) - это общее название группы шаблонов проектирования.
Фабрикой может быть класс, функция, метод класса.
Задача фабрики - производить объекты.
Фабричная функция должна возвращать другие функции, в зависимости от входящих параметров.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
