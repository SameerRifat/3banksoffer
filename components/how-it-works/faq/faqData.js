import cx from 'classnames'
import css from './faq.module.scss'

const faqData = [
    {
        question: 'What if I just want a price estimate?',
        answer: <p className={cx('typoBody1', css.answer_content)}>
            If you just want a price estimate, but not a definite offer for your task, we would like to help you find a single and at most two craftsmen who can contact you by phone.
            <br />
            <br />
            However, you should be aware that there are many tasks that require the craftsman to visit you and see what work needs to be done before they can give you an accurate price for the work. Therefore, a price oversell over the phone can rarely give you an exact amount.
        </p>,
    },
    {
        question: 'How do I get a construction guarantee for my assignment?',
        answer: <p className={cx('typoBody1', css.answer_content)}>
            When you  submit an assignment via 3byggetilbud.dk, we can, as an option, issue a free guarantee on your assignment. The company guarantee covers errors and omissions for up to DKK 35,000 for private individuals, and DKK 100,000 for tasks submitted by associations and businesses. The company guarantee covers a wide range of tasks that are handled at 3byggetilbud.dk.
            <br />
            <br />
            All you have to do to get the construction guarantee is to  upload the quote  from the tradesman you have chosen to carry out the task.  Submit the offer a few days before the work starts . We then review the case and issue the contract guarantee within 12 hours.
        </p>,
    },
    {
        question: 'Is it 3byggetilbud.dk that sends the offers?',
        answer: <p className={cx('typoBody1', css.answer_content)}>
            No. 3byggetilbud.dk makes sure to find 3 craftsmen who suit your task in terms of skills and geography. We then pass on the task to the craftsmen and we forward your contact details so that the craftsmen can get in touch with you.
            <br />
            <br />
            If there is a need for an inspection of the task, you will agree to this in more detail with the craftsman. Subsequently, the three craftsmen each submit an offer for your task.
        </p>
    },
    {
        question: 'Will I receive an offer from the craftsmen immediately?',
        answer: <p className={cx('typoBody1', css.answer_content)}>
            It is not 3byggetilbud.dk, but rather the craftsmen who provide you with an offer for your task. You must therefore first have a dialogue with the craftsmen before you receive your offers.
            <br />
            <br />
            When you have created and submitted a task on 3byggetilbud.dk, our service department will, after a short telephone conversation with you, select up to three craftsmen who can submit an offer for your task. The craftsmen will contact you to agree on the offer.
            <br />
            <br />
            It varies a lot how quickly the craftsmen can submit an offer. In some cases, the craftsmen must visit you and take a closer look at the scope of the task and discuss the task solution with you before they can submit a concrete offer. In other cases, the craftsmen can give you an estimate over the phone when you talk together.
        </p>
    },
    {
        question: 'What if I have an urgent task?',
        answer: <p className={cx('typoBody1', css.answer_content)}>
            If you have an urgent task, you are always welcome to send it to 3byggetilbud.dk and <b>write that the task is urgent.</b> It is not certain that we will be able to get three tradesmen who can submit offers, but we will do our best to get your case resolved quickly. If your task is so urgent that you don't have time to go through our task service, you are always very welcome to use our tradesman search engine and via it make direct contact with the individual tradesman companies.
        </p>
    },
    {
        question: 'What if I already have an offer?',
        answer: <p className={cx('typoBody1', css.answer_content)}>
            It is always a good idea to have a good basis for comparison before choosing a craftsman for a construction task. If you have already obtained one offer yourself, we would recommend that you supplement with two further offers, so that you have three in total.
            <br />
            <br />
            If you want three offers obtained from 3byggetilbud.dk, we will also help with this where possible.
        </p>
    },
];

export default faqData