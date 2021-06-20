# Лендинг для бренда Friso
Ссылка на результат: https://stasokulov.github.io/friso/

## Установка:

```
npm i
```

## Доступные GULP задачи:

Запуск проекта, копмиляция стилей, проверка кода линтами, обновление страницы браузера при изменении файлов

```
npm start || gulp
```

Минификация стилей и скриптов

```
npm run build || gulp build
```

> Для работы с проектом через cli gulp глобально должен быть установлен gulp

## Настройки ES-линтера:

Подробное описание: https://eslint.org/docs/rules/

Используемые настройки (airbnb-base/legacy): https://github.com/airbnb/javascript/tree/es5-deprecated/es5

### Переопределенные настройки:

- `indent`: Отступ 1 таб
- `no-tabs`: Нельзя использовать таб вместо пробела

## Настройки Style-линтера:

Подробное описание: https://stylelint.io/user-guide/rules/

### Цвет:

- `color-hex-case`: Указание цвета в нижнем регистре
- `color-named`: Указание цвета без использования названий
- `color-no-invalid-hex`: Ошибка в HEX-цвете

### Шрифт:

- `font-family-name-quotes`: Указание кавычек при объявлении шрифта
- `font-weight-notation`: Указание толщины шрифта в цыфрах

### Функции:

- `function-calc-no-invalid`: Недопустимое выражение в calc функциях запрещено
- `function-calc-no-unspaced-operator`: Указание пробелов при использовании функции calc
- `function-comma-space-before`: Указание пробела перед запятой при использовании функции с несколькими аргументами не должно быть
- `function-comma-space-after`: Указание пробела после запятой при использовании функции с несколькими аргументами
- `function-linear-gradient-no-nonstandard-direction`: Указание линейного градиента по стандартной нотации
- `function-name-case`: Указание функций в нижнем регистре
- `function-parentheses-newline-inside`: Аргументы функции вместе со скобками пишутся в одну строку
- `function-parentheses-space-inside`: Пробел перед открывающей и закрывающей скобками аргументов функций не ставится
- `function-url-no-scheme-relative`: Запрещает указание URL начинающегося с //
- `function-url-quotes`: Указание ковычек при указании URL
- `function-whitespace-after`: Использование пробела между несколькими функциями в одном свойстве

### Числа:

- `number-leading-zero`: Указание нуля в десятичных цифрах не нужно
- `number-max-precision`: Максимальное количество цифр после точки 3
- `number-no-trailing-zeros`: Запрет на использование ненужных нулей

### Нулевые значения:

- `length-zero-no-unit`: Запрещает использование единиц измерения при указании 0

### Строки:

- `string-no-newline`: Запрет перехода на новую строку
- `string-quotes`: Строки указываются в двойных кавычках

### Единицы измерения:

- `unit-case`: Указание единиц измерения в нижнем регистре
- `unit-no-unknown`: Запрещает использовать единицы измерения не описаные в специкации css

### Значения свойств:

- `value-keyword-case`: Указание значений свойств в нижнем регистре
- `value-list-comma-newline-after`: Запрещает использование перехода на новую строку после запятой
- `value-list-comma-space-before`: Запрещает использование пробелов перед запятой
- `value-list-comma-space-after`: Указание пробелов после запятой

### Свойства:

- `property-case`: Указание названий свойств в нижнем регистре
- `property-no-unknown`: Запрещает использовать свойства которые не указаны в спецификации CSS, но игнорируется переменные (\$sass, @less, --custom-property)

### Декларации свойств:

- `declaration-bang-space-before`: Пробел перед знаком ! в декларации !important
- `declaration-bang-space-after`: Пробел после знака ! в декларации !important запрещен
- `declaration-colon-space-before`: Пробел до символа ':' в объявлении свойства запрещен
- `declaration-colon-space-after`: Пробел после символа ':' в объявлении свойства
- `declaration-empty-line-before`: Использование пустой строки перед объявлением свойств запрещен
- `declaration-block-no-duplicate-properties`: Запрещает использовать одинаковые свойства несколько раз в блоке
- `declaration-block-no-shorthand-property-overrides`: Разрешает создавать перекрывающие свойства

### Селекторы:

- `selector-attribute-brackets-space-inside`: Отступы в селекторе атрибутов запрещены
- `selector-attribute-operator-space-before`: Пробел после оператора в атрибуте селектора запрещен
- `selector-attribute-operator-space-after`: Пробел перед оператором в атрибуте селектора запрещен
- `selector-attribute-quotes`: Использование ковычек в атрибутах селекторов обязательно
- `selector-combinator-space-before`: Пробел перед символом комбинатора (+ > ~) обязателен
- `selector-combinator-space-after`: Пробел после символа комбинатора (+ > ~) обязателен
- `selector-descendant-combinator-no-non-space`: Использовать ненуженое пространоство между классами запрещено
- `selector-list-comma-space-before`: Пробел перед запятой в списке селекторов запрещен
- `selector-list-comma-space-after`: Пробел после запятой в списке селекторов обязателен
- `selector-list-comma-newline-before`: Переход на новую строку перед запятой в списке селекторов запрещен
- `selector-list-comma-newline-after`: Переход на новую строку после запятой в списке селекторов разрешен
- `selector-pseudo-class-no-unknown`: Неизвестные селекторы псевдокласса запрещены
- `selector-pseudo-element-no-unknown`: Неизвестные селекторы псевдоэлементов запрещены
- `selector-type-no-unknown`: Cелекторы неизвестного типа запрещены

### Медиа запросы:

- `media-feature-colon-space-before`: Пробел перед символом ':' в медиа запросе запрещен
- `media-feature-colon-space-after`: Пробел после символа ':' в медиа запросе обязателен
- `media-feature-name-case`: Указание медиа запросов в нижнем регистре
- `media-feature-name-no-unknown`: Запрещает использовать свойства не из спецификации
- `media-feature-parentheses-space-inside`: Пробелы внутри круглых скобок в медиа запросах запрещены
- `media-feature-range-operator-space-before`: Пробел перед оператором диапозона обязателен
- `media-feature-range-operator-space-after`: Пробел после оператора диапозона обязателен
- `media-query-list-comma-newline-before`: Переход на новую строку перед запятой в списке медиа запроса запрещен
- `media-query-list-comma-newline-after`: Переход на новую строку после запятой в списке медиа запроса запрещен
- `media-query-list-comma-space-before`: Пробел перед запятой в списке медиа запроса запрещен
- `media-query-list-comma-space-after`: Пробел после запятой в списке медиа запроса обязателен

### Дополнительно:

- `at-rule-no-unknown`: Неизвестные правила (@unknown, @custom) запрещены
- `comment-no-empty`: Пустые комментарии запрещены
- `no-descending-specificity`: Селекторам с более низкой специфичностью приходить после переопределения селекторов с более высокой специфичностью запрещено
- `no-duplicate-at-import-rules`: Повторяющиеся @import правила в таблице стилей запрещены
- `no-duplicate-selectors`: Дублирующиеся селекторы в таблице стилей запрещены
- `no-empty-source`: Пустые источники запрещены
- `no-extra-semicolons`: Лишние ';' запрещены
- `shorthand-property-no-redundant-values`: Избыточные значения в сокращенных свойствах запрещены
- `at-rule-name-case`: Указание имен правил в нижнем регистре
- `comment-whitespace-inside`: Пробелы на внутренней стороне маркеров комментариев обязательны
- `indentation`: Отступ 1 таб
- `linebreaks`: Разрыв строк "unix"
