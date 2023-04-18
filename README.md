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
Вызов функции rerender будет каждый раз помещать в state каждый раз новый пустой объектный литерал (имеющий другую сылку),
что будет вызывать повторную отрисовку UI.


Хуки позволяют решать те же проблемы, что и HOC, но без необходимости добавления дополнительных элементов в DOM,
что положительно влияет на производительность.


Пользовательский хук - это функция, которая содержит повторно используемую логику компонента.
Внутри пользовательских хуков можно использовать стардартные хуки и другие пользовательские хуки.



Создание функций, которые возвращают callback, позволяет не использовать анонимный callback в JSX и сделает код более аккуратным:
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
Сайд-эффекты, реализованные с помощью useEffect не блокируют рендеринг UI, что делает его более отзывчивым и улучшает UX.

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
При работе с тяжёлыми компонентами при использовании useEffect могут возникать недопустимые задержки в отображении сайд-эффектов.
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

В общем случае хук forwardRef используется для того
чтобы передать входящий ref дочернему компоненту.


Компонент высшего порядка (High Order Component) - это функция, которая в качестве параметра принимает компонент
и возвращает новый компонент, созданный на основе входящего, но с добавленнием дополнительной логики.
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
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
