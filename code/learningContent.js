/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "לומדת ת\"ש";

/****     הכנס כמות כוללת מקסימלית של שאלות למבחן. יש לשים לב לכמות השאלות הקיימות מהבהד - שלא כמות שלא קיימת   *******/
const AMOUNT_EXAM_QUESTIONS = 10;

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "11:00";

// אובייקט המכיל את כל המידע של הלומדה הכולל את התוכן, השאלות לכל נושא וכמות השאלות שיילקח מכל נושא למבחן
const DATA = { 
    // שם נושא
    "ביקור בית": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questionsExam": [
        ],
        "questionsPractice": [
            {
                type: "multiple",
                question: `איפה ניתן למצוא את כל המידע המקצועי
                במערך הת"ש`,
                ans1: `ספר ניהול משרד המשא"ן`,
                ans2: `ספר פקודות ונהלי יחידה`,
                ans3: `ספר ניהול משרד הת"ש`,
                correctAns: "ans3"
            },
            {
                type: "multiple",
                question: `כמה ימים יש להחתים רופא יחידה + לבצע
                ביקור בית + החתמת מפקדים מרגע הבאת
                כלל האישורים והעלאתם למערכת (זמן תקן
                מיוחד)?`,
                ans1: `10  ימים להחתים רופא ולבצע ב"ב, 10 ימים להחתים מפקדים.`,
                ans2: `10 ימים להחתים רופא ולבצע ב"ב, 10 ימים להחתים מפקד ישיר ומפקד בדרגת סא"ל.`,
                ans3: `10 ימים להחתים רופא ולבצע ב"ב, 10 ימים להחתים מפקד ישיר ומפקד בדרגת סא"ל, 7 ימים להחתים מפקד בדרגת אל"מ.`,
                ans4: `10 ימים להחתים רופא ולבצע ב"ב.`,
                correctAns: "ans3"
            },
            {
                type: "multiple",
                question: `האם הלילות של שישי ושל שבת נחשבים
                כלילה אחד בבית?`,
                ans1: `כן, רק ביחידות קרביות`,
                ans2: `לא, כל לילה הוא לילה אחד.`,
                ans3: `לא`,
                ans4: `כן`,
                correctAns: "ans4"
            },            
            {
                type: "multiple",
                question: `חייל שקיבל הת"ש 3 ומעלה ומתגורר מעל
                ל-100 ק"מ מיחידתו תוך כמה זמן יש לפלוט
                אותו?`,
                ans1: `תוך עשרה ימי עבודה`,
                ans2: `תוך שבועיים`,
                ans3: `מיידית`,
                ans4: `מיידית`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `האם ניתן להעניש חייל זכאי הת"ש ובכל לפגוע
                במימוש ההטבה? אם כן מה המגבלות?`,
                ans1: `כן רק במידה והחיייל מסכים לכך.`,
                ans2: `לא, אלא באישור של מפקד בדרגת אל"מ
                ומעלה`,
                ans3: `כן.`,
                ans4: `כן.עונש ריתוק "גובר" על כל הקלת ת"ש
                או הטבה אחרת לה זכאי החייל, למעט
                הקלות ופטורים מסיבות רפואיות (הת"ש
                הניתן לחייל מידי רופא/קב"ן`,
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: `האם חייל זכאי הת"ש מחויב לצאת לקורסים
                שנכללים במסלולו הצבאי? במידה וכן, האם
                בקורס מחויבים לממש את זכאותו`,
                ans1: `כן. יממש את זכאותו לפי החלטת מפקד
                היחידה.`,
                ans2: `לא.לא יצא לקורס במידה ולא ירצה.`,
                ans3: `כן.בקורס מחויבים לממש את זכאותו`,
                ans4: `לא`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `מי הגורם המאשר הת"ש סוציאלי חריג?`,
                ans1: `מדור פרט במיטב`,
                ans2: `קצינת ת"ש חונכת`,
                ans3: `משקית ת"ש`,
                ans4: `אותו התהליך כמו הת"ש רפואי רגיל:
                במידה וניתן למצות את החייל ביחידה-
                מפקד היחידה,במידה ויש לפלוט את
                החייל-סמכות התגבורות.
                `,
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: `מה קורה אם קרוב משפחה עבורו היה זכאי
                החייל להת"ש נפטר?`,
                ans1: `החייל ימשיך להיות זכאי להטבה עד
                לשחרורו.`,
                ans2: `ש לתת לחייל תקופת התארגנות בת חודשיים
                מיום הפטירה. בתום תקופה זו תיבחן זכאותו
                 מחדש`,
                ans3: `עם חזרת החייל מהשבעה, ידון מפקד .
                היחידה בהטבתו.`,
                ans4: `החייל לא יהיה זכאי להטבה מאותו
                הרגע.`,
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: `האם ניתן להגיש בקשה להת"ש בהכשרה
                ראשונית?`,
                ans1: `כן`,
                ans2: `כן, רק אם הבקשה דחופה.`,
                ans3: `לא, ניתן להגיש בקשה להת"ש רק
                ביחידת הסדיר בה החייל ישרת`,
                ans4: `לא`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `האם משקית ת"ש ביחידה פתוחה צריכה
                להגיש הת"ש? למה?`,
                ans1: `לא.לא ניתן להגיש הת"ש ביחידה פתוחה,
                גם ככה עושים יומיות`,
                ans2: `כן,ממספר הת"ש מסוים מקבלים תווים
                בחוגר.`,
                ans3: `לא צריכה להגיש. `,
                ans4: `כן,ממספר הת"ש מסוים,ניתן לעשות
                מספר מוגבל של תעסוקה מבצעית
                ומשימות אבטחה.`,
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: `בפיקוד אכ"א,בסיסי טירונים ובה"די
                הכשרות ע"י מי תבחן הבקשה?`,
                ans1: `רת"ח פרט וגיוסים במיטב`,
                ans2: `ראש אכ"א`,
                ans3: `קצינת ת"ש יחידתית`,
                ans4: `משקית הת"ש`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `מי הוא הגורם המאשר של הת"ש סוציאלי או
                רפואי?`,
                ans1: `מדור פרט במיטב.`,
                ans2: `מפקד היחידה ובמקרה פליטה סמכות
                התגבורת.`,
                ans3: `סמכות התגבורת`,
                ans4: `רופא היחידה`,
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: `מי הוא הגורם המאשר הת"ש מטעמים נפשיים?`,
                ans1: `מדור פרט במיטב`,
                ans2: `סמכות התגבורת`,
                ans3: `מפקד היחידה ובמקרה פליטה סמכות
                התגבורת`,
                ans4: `קצינת הת"ש`,
                correctAns: "ans3"
            },
            {
                type: "multiple",
                question: `האם ניתן להגיש במקרים חריגים בקשת הת"ש
                עבור סבא/סבתא? אם כן אילו אישורים נדרשים
                מהחייל להביא?`,
                ans1: `לא,בקשת הת"ש היא רק בעבור קרובים
                מדרגה ראשונה`,
                ans2: `כן,אין צורך להביא אישורים תומכים.`,
                ans3: `לא.`,
                ans4: `כן, אותם אישורים כמו בהת"ש רגיל.`,
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: `האם ניתן להגיש הת"ש על מחלה סופנית של
                קרוב מדרגה ראשונה למרות שאינו זקוק
                לסיוע? אם כן מי הוא הגורם המאשר?`,
                ans1: `כן,מדור פרט במיטב.`,
                ans2: `כן,מפקד היחידה ובמקרה פליטה סמכות
                התגבורת.`,
                ans3: `לא,לא ניתן להגיש כלל.`,
                ans4: `כן. באישור משקית הת"ש.`,
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: `האם ההת"ש מחייב לינה בבית בימים
                קבועים?`,
                ans1: `כן, על פי בקשת החייל.`,
                ans2: `לא,על פי החלטת מפקדי החייל
                ובשיתופו.`,
                ans3: `כן, על פי החלטת מפקד היחידה`,
                ans4: `לא`,
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: `האם יש לארכב את כלל האישורים והטפסים
                למערכת מהבקשה?`,
                ans1: `כן, כדי שהאישורים והטפסים לא יאבדו`,
                ans2: `לא,אין צורך,הבקשה בנוהל ידני`,
                ans3: `כן,כדי שמפקדי החייל יוכלו לראותם.`,
                ans4: `לא, אין צורך.`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `מה הוא הת"ש 01?`,
                ans1: `הת"ש למשפחות להן בנים זכרים יחידים
                בני העדה הדרוזית.`,
                ans2: `הת"ש למשפחות דרוזיות להן ילדים
                יחידים.`,
                ans3: `הת"ש לבנים למשפחות מוסלמיות.`,
                ans4: `הת"ש למשפחות מוסלמיות להן ילדים
                יחידים.`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `לאיזה סוג הת"ש זכאי חייל אשר משתייך
                לקהילת בית-אל`,
                ans1: `הת"ש 99`,
                ans2: `הת"ש 3`,
                ans3: `הת"ש 7`,
                ans4: `הת"ש לפי החלטת מפקדים.`,
                correctAns: "ans3"
            },
            {
                type: "multiple",
                question: `עד איזה שעה חייל אשר זכאי הת"ש יצטרך
                להגיע הביתה?`,
                ans1: `21:00`,
                ans2: `20:00`,
                ans3: `16:00`,
                ans4: `18:00`,
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: `האם חייל בהכשרה ראשונית מחויב לקבל
                את זכאותו להת"ש `,
                ans1: `כן,אך אין באפשרותו לממש אותו במהלך ההכשרה`,
                ans2: `לא, אין הת"ש בהכשרה ראשונית.`,
                ans3: `כן.`,
                ans4: `לא.`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `האם ניצול של חופשה מיוחדת לחייל זכאי
                הת"ש שווה ערך לניצול זכאותו להת"ש?`,
                ans1: `לא.יש לאפשר לחייל לנצל גם חופשה
                מיוחדת וגם הת"ש בו זמנית.`,
                ans2: `חייל עם הת"ש לא יכול לנצל חופשה
                מיוחדת`,
                ans3: `לא.`,
                ans4: `כן. חייל המנצל חופשה מיוחדת כאילו
                ניצל את זכאותו להת"ש באותו השבוע.`,
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: `האם ימי גימלים מחליפים את ימי הזכאות של הת"ש?`,
                ans1: `לא. במידה וחייל זכאי הת"ש שהה בביתו
                עקב גימלים, הדבר אינו בא במקום מימוש ההת"ש`,
                ans2: `כן, הרי בגימלים החייל נמצא גם ככה בבית`,
                ans3: `כן.לא ניתן לממש גם גימלים וגם הת"ש
                באותו השבוע.`,
                ans4: `לא.`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `מה הם הקרטריונים להת"ש חריג?`,
                ans1: `כל סיבה הדורשת את נוכחות החייל בבית`,
                ans2: `קושי נפשי/רגשי של החייל`,
                ans3: `הקרטריונים יקבעו על פי מפקד החייל`,
                ans4: `קושי כלכלי של החייל.`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `האם הת"ש 3 ומעלה מוריד חייל בצורה
                אוטומטית מתפקידי הלוחמה השונים?`,
                ans1: `כן.לוחם לא יכול להיות זכאי הת"ש.
                מתוקף תפקידו.`,
                ans2: `לא.במידה ומפקד החייל מוצא כי באפשרותו
                למצות את החייל ביחידה,הוא רשאי לעשות כן`,
                ans3: `לא,יש להעלות את הבקשה לסמכות
                התגבורת להחלטה בנושא`,
                ans4: `לא.`,
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: `מנו את האוכלוסיות שלהן מגיע הת"ש
                מובנה`,
                ans1: `חיילים המשתייכים לעדה
                הקראית/שומרונית/עבריים
                מדימונה/קהילת בית אל בלבד`,
                ans2: `בנים למשפחות שכולות/נפגעי פעולות
                איבה/אחים או הורים נכי צה"ל בעלי %100
                נכות,פטירת קרוב מדרגה ראשונה בחמשת
                שנים האחרונות,חיילים שלהוריהם בעיה
                רפואית`,
                ans3: `כל התשובות נכונות`,
                ans4: `בנים למשפחות שכולות/נפגעי פעולות
                איבה/אחים או הורים נכי צה"ל בעלי
                %100 נכות,פטירת קרוב מדרגה ראשונה
                בחמשת שנים האחרונות,חיילים
                המשתייכים לעדה
                הקראית/שומרונית/עבריים
                מדימונה/קהילת בית אל,חייל נשוי עם
                ילד,בן זכר לקהילה הדרוזית`,
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: `לחייל דרוזי ביחידתך יש שלוש אחיות ואין
                אחים,האם הוא זכאי להת"ש?במידה וכן,
                איזה הת"ש ומי יהיה הגורם המאשר`,
                ans1: `כן,זכאי להת"ש 01.במידה וההטבה אינה
                מוזנת לאחר גיוס החייל היא תוגש לבחינה
                לרת"ח פרט וגיוסים במיטב`,
                ans2: `כן,זכאי להת"ש 03.באחריות ק.ת"ש
                יחידה להזין את ההטבה`,
                ans3: `כן,זכאי להת"ש 03.במידה וההטבה אינה
                מוזנת לאחר גיוס החייל היא תוגש
                לבחינה לרת"ח פרט וגיוסים במיטב.`,
                ans4: `החייל לא זכאי להת"ש`,
                correctAns: "ans1"
            },
            {
                type: "multiple",
                question: `מה קורה כאשר נפטר קרוב מדרגה ראשונה
                של חייל בודד או הלנ"פ שאינו בקשר עם
                הוריו?`,
                ans1: `החייל יהיה זכאי אוטומטית להת"ש 3
                פטירה טרייה`,
                ans2: `סמכות מפקדו הישיר להחליט אם יהיה
                זכאי להת"ש או לא`,
                ans3: `על החייל להגיש בקשה להת"ש 3
                שתבחן ע"י מפקדיו`,
                ans4: `החייל יוצא לחופשה של חודשיים`,
                correctAns: "ans3"
            },
            {
                type: "multiple",
                question: `מה הם הגורמים להת"ש 99?`,
                ans1: `המצב הרפואי והכלכלי של החייל.`,
                ans2: `כל התשובות נכונות.`,
                ans3: `המצב הרפואי והכלכלי של משפחת
                החייל.`,
                ans4: `אין דבר כזה הת"ש 99 ,הוא שונה להת"ש
                .7`,
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: `הינך מש"ק/ית ת"ש בבסיס טירונים במחנה
                80.יניב ניגש אליך ומעוניין להגיש בקשה
                להת"ש סוציאלי. אילו אישורים תדרוש/י
                מיניב?האם תצטרך/י לערוך לו ביקור בית?`,
                ans1: `אין אפשרות להגיש הת"ש שלא מסיבה
                רפואית של אחד מקרובים מדרגה`,
                ans2: `החייל יידרש להציג כל אישור המעיד על ראשונה.
                מצבו של הקרוב (לדוגמא אישורי עו"ס,
                מכתבים אישיים,התייחסות רפואית) ויש
                לערוך לו ביקור בית`,
                ans3: `החייל יידרש להציג כל אישור המעיד על מצבו
                של הקרוב (לדוגמא אישורי עו"ס,מכתבים
                אישיים,התייחסות רפואית) ואין צורך לביקור בית`,
                ans4: `אין אפשרות להגיש הת"ש`,
                correctAns: "ans2"
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            "ביקור בית – בקשות ת\"ש": {
                "מטרה והיערכות": [ 
                    {
                        cardType: "text",
                        content: `מטרת ביקור הבית היא התרשמות, איסוף
                        מידע ואימות מידע אשר נמסר על- ידי החייל
                        לבקשות השונות אשר הגיש.`
                    },
                ],
                "על ידי מי נערך הביקור": [
                    {
                        cardType: "text",
                        content: `ביקור בית לבקשות הת"ש של חייל ייערך
                        בתוך שבעה ימי עבודה מיום הגשת האישורים
                        הרלוונטיים על ידי החייל. ביקור הבית ייערך
                        על ידי משקית הת"ש, ומומלץ לערוך אותו עם
                        מפקד החייל.`
                    },
                ],
                'ביקורי בית': [
                    {
                        cardType: "_3titles_3text",
                        subTitle1: "סוגי בקשות להן יש לערוך ביקור בית: ",
                        content1: `<ul class="list"><li>בקשות חייל לסיוע כלכלי- מוצרים מקרן
                        הסיוע של יל״ח</li><li>תשלומי משפחה</li><li>בקשת חייל להקלות בתנאי שירות</li></ul>`,
                        subTitle2: "ביקור בית מפקד לקראת החגים",
                        content2: `
                        אוכלוסיה נדרשת- חיילי סגל ומפקדה ביחידה
                        בלבד, ללא חניכים בקורסים והכשרות,
                        שעונים על הקריטריונים המפורטים: <br>
                        א. חיילים המוכרים כבודדים בצה״ל. <br>
                        ב. חיילים הזכאים לתשמ״ש (הורים /נשוי).<br>
                        ג. חיילים בעלי הת״ש 5 או הת״ש 7 .<br>
                        ד. חיילים שהינם נשואים.<br>
                        ה. חיילים שהינם עולים חדשים`
                    },

                ],

            },
        },
    },
    // שם נושא
    "פתיחת בקשת ת\"ש": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questionsExam": [],
        "questionsPractice": [],
        "amountOfQuestions": 0,
        "learningContent": {
            "בקשות ת\"ש": {
                "זכאות לפתיחת ת\"ש": [
                    {
                    cardType: "text",
                    content: `
                    מי זכאי לפתיחת בקשת ת״ש: <br>
                    א. קרוב משפחה מקרבה ראשונה של החייל<br>
                    נזקק לסיוע של החייל לתפקוד היום-יומי.
                    ב. חייל אשר קרוב משפחה מקרבה ראשונה<br>
                    נפטר וטרם חלפה שנה ממועד הפטירה.
                    ג. חייל אשר הינו בן למשפחה שכולה/ נפגעי<br>
                    פעולות איבה.<br>
                    ד. חייל אשר הינו בן/ אח של נכה צה״ל עם
                    %100 נכות.<br>
                    ה. חייל המשתייך לקהילת השומרונים,
                    הקראים או העבריים מדימונה.<br>
                    ו. חייל המשתייך לאוכלוסיית קהילת בית אל.<br>
                    ז. בן זכר יחיד לעדה הדרוזית`
                }
            ]
            }
        },
        
    },
    // שם נושא
    "תווי קניה לרכישת מזון": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "questionsExam": [],
        "questionsPractice": [],
        "amountOfQuestions": 0,
        "learningContent": {
            // סוג הכרטיסייה
            "תווי קניה": 
                    { "זכאות לתווי קניה": [
                        {
                            cardType: "text",
                            content: `
                            מי זכאי לתווי קנייה לרכוש מזון?
                            <ol class="list">
                            <li>זכאים אוטומטית:
                            <ul class="list"><li>חיילים בודדים בכל רמות הפעילות.</li>
                            <li>זכאי תשמ״ש הורים בכל רמות הפעילות.</li>
                            <li>זכאי תשמ״ש נשוי ותשמ״ש אח ברמת
                            פעילות א ומעלה בלבד.</li>
                            <li>חיילים בודדים וזכאי הלנה מטעמי פרט
                            המתגוררים בדירות ׳יחד למען החייל׳.</li>
                            </ul>
                            </li>
                            <li>זכאות לתווי קנייה לשיקול דעת מערך
                            הת״ש/ מפקדים.</li>
                            <li>א.תווי קנייה חד פעמיים.<br>
                            ב. .תווי קנייה מתמשכים</li>
                            </ol>`
                    }
                ]
                }
        },
    },
    "תנאים לחייל ספורטאי מצטיין": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // שאלות לנושא הזה
        "questionsPractice": [],
        "questionsExam": [],
        "learningContent": {
            // סוג הכרטיסייה
            "ספורטאי מצטיין": {
                "ספורטאים, רקדנים, מוזיקאים פעילים ומצטיינים:": [
                    {
                        cardType: "text",
                        content: `ניתן לשלול את מעמדו כמצטיין או כספורטאי 
                        פעיל מהטעמים הבאים:
                        <ul class="list">
                        <li>הישגים בלתי נאותים של החייל.</li>
                        <li>החייל אינו נוהג בשקידה הראויה בהכשרה
                        או באימוניו בתחום הצטיינותו.</li>
                        <li>החייל מתנהג באופן בלתי הולם במהלך
                        שירותו הצבאי.</li>
                        <li>נמצא כי הנתונים שעמדו ביסוד אישור בקש
                        החייל, כולם או מקצתם, לא היו מדויקים או
                        אינם רלוונטיים עוד.</li>
                        <li>טעמים מיוחדים אחרים שירשמו.</li></ul>`
                    }
                ]
            }
        },
        "amountOfQuestions": 0
    },
    "סוגי היתרי עבודה פרטית": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        // שאלות לנושא הזה
        "questionsPractice": [],
        "learningContent": {
            // סוג הכרטיסייה
            "סוגי היתרי עבודה": {
                "סוגי היתרי עבודה פרטית": [
                    {
                        cardType: "text",
                        content: `היתרי עבודה פרטית יינתנו מהטעמים
                        המפורטים להלן: <br>
                        א. היתר עבודה מטעמי מצוקה כלכלית.<br>
                        ב. היתר עבודה פרטית בגין התנדבות
                        בקהילה.<br>
                        ג. היתר עבודה פרטית עבור ספורטאי מצטיין/
                        פעיל.<br>
                        ד. היתר עבודה פרטית בגין התמחות
                        מקצועית.<br>
                        ה. היתר עבודה חריג.`
                    }
                ]
            }
        },

    },
    "הת\"ש סוצאלי": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
        // שאלות לנושא הזה
        "questionsPractice": [],
        "learningContent": {
            // סוג הכרטיסייה
            "בקשות ת\"ש": {
                "בקשת הת\"ש סוציאלי": [
                    {
                        cardType: "text",
                        content: `חייל אשר מעוניין להגיש בקשה להת"ש
                        סוציאלי יידרש להציג כל אישור המעיד על
                        מצבו של הקרוב(לדוגמא: אישורי עו"ס,
                        מכתבים אישיים,התייחסות רפואית) ויש
                        לערוך ביקור בית.`
                    }
                ]
            }
        },

    },
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        if (json.subTitle3 && json.content3) {
            card.querySelector(".sub-title3").innerHTML = json.subTitle3;
            card.querySelector(".content3").innerHTML = json.content3;
        }
    }
}

CARD_TYPES.list3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}
CARD_TYPES.youtube = {
    init(card, json) {
        card.querySelector(".youtube").src = json.youtube;
  
    }
}
