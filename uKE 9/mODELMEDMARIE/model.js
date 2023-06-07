const model = {
    //app-ting
    app: {
        currentPage: 'login',
        userType: 'admin'
    },
    //inputs til hver side
    inputs: {
        loginPage: {
            userName: '',
            passWord: '',
        },
        fillSurveyPage:{
            questions : [{
                questionId: 1,
                answers: [{isChecked: true, text: 'svar 1'},
                            {isChecked: false, text: 'svar 2'}
            ],
            friTextAnswers: ['mitt svar']
            }]
            {questionId: 2,answers: [{isChecked: true, text: 'svar 1'},
            {isChecked: false, text: 'svar 2'}
],
            }
        },
        emailSendingPage: {
            addEmail: '',
            chooseAll: false,
            emailAddresses: [1,2]
        },
        createSurveyPage: {
            questions : [{
                questionText: 'Når tar vi lønningspils?'
                answers: [{isChecked: true, text: 'svar 1'},
                            {isChecked: false, text: 'svar 2'}
            ],
            friTextAnswers: ['mitt svar']
            }]
        },
        }
    },
    //felles data
    surveys : [{ surveyId: 1, title: 'lønningspils: noen forslag', ongoing: true,
    numberOfAnswers: 23, completedDate: '',},
    {title: 'julebord: noen forslag', ongoing: false,
    numberOfAnswers: 34, completedDate: '11.11.22'}
    ],
    questions: [{questionId: 1, surveyId: 1, title: 'Når?', answers: [{isChecked: true, text: 'svar 1'},
    {isChecked: false, text: 'svar 2'}]}]
    emails: [{userId 1, emailAddress: 'Eksempel@gmail.com'},
    {userId 2, emailAddress: 'Eksempel@gmail.com'},
    {userId 3, emailAddress: 'Eksempel@gmail.com'}

]
};