import { useNavigate } from "react-router-dom";

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import PasswordProtected from './PasswordProtected';
import FadeInImage from './FadeInImage';

import goalsHeader from '../assets/images/projects/goals/goals-header.png'
import pie1 from '../assets/images/projects/goals/pie1.png'
import pie2 from '../assets/images/projects/goals/pie2.png'
import pie3 from '../assets/images/projects/goals/pie3.png'
import autopilot from '../assets/images/projects/goals/autopilot.png'
import recurring from '../assets/images/projects/goals/recurring.png'
import paycheck from '../assets/images/projects/goals/paycheck.png'
import percentageSplit from '../assets/images/projects/goals/percentage-split.png'
import goalsConcepts from '../assets/images/projects/goals/goalsConcepts.png'
import goalsGrayscales from '../assets/images/projects/goals/goalsGrayscales.png'
import setup1 from '../assets/images/projects/goals/setup1.png'
import setup2 from '../assets/images/projects/goals/setup2.png'
import setup3 from '../assets/images/projects/goals/setup3.png'
import setup4 from '../assets/images/projects/goals/setup4.png'
import funding1 from '../assets/images/projects/goals/funding1.png'
import funding2 from '../assets/images/projects/goals/funding2.png'
import funding3 from '../assets/images/projects/goals/funding3.png'
import manual1 from '../assets/images/projects/goals/manual1.png'
import manual2 from '../assets/images/projects/goals/manual2.png'
import goalSelect from '../assets/images/projects/goals/goalSelect.png'
import details from '../assets/images/projects/goals/details.png'
import hub from '../assets/images/projects/goals/hub.png'
import detailsComplete from '../assets/images/projects/goals/detailsComplete.png'
import hubComplete from '../assets/images/projects/goals/hubComplete.png'

import ToTopButton from './ToTopButton';
import Footer from './Footer';


const CaseStudySavingsGoals = (props) => {

    const navigateTo = useNavigate();

    return (
        // <PasswordProtected>
        <div className="content-case-study">
            <ToTopButton />
            <div id="goals-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/projects')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" />
                    <div className='back-text'>back</div>
                </div>
                <div className="text">
                    <div className="title">
                        Savings Goals
                    </div>
                    <div className="headline">
                        Helping customers build financial resilience and jumpstart a healthy savings habit.
                        Savings goals creates purpose and makes saving feel attainable as customers work towards a tangible goal.
                        <div className="spacing-075" />
                        Rolling out to 100% of customers with early results showing 42% of customers have completed goals and 80% have graduated to another savings tool.
                    </div>
                </div>
                <div className="header-img" id="align-center">
                    <FadeInImage src={goalsHeader} alt="savings goals header" loading="eager" />
                </div>
            </div>

            {/* Summary section */}
            <div className='summary'>
                <div>
                    <div className="summary-section">
                        <div className="section-title bold">THE PROBLEM</div>
                        <div className="text-block">
                            Saving can be incredible amorphous and daunting. Many people feel like they should be saving money, but don’t know to. Between feeling like they don’t have the means to save and not knowing how to begin, many end up not saving at all.
                            <div className="spacing-075" />
                            <b className="highlight-blue">The goal:</b> Make saving money feel tangible so customers actually start
                            saving and start building their financial resiliency.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div className="text-block">
                            Our research has shown that just $400 in savings allows most people to bounce back from an unexpected financial challenge (our definition of financial resilience). 58% of customers who primarily bank with Capital One have less than that across all bank accounts. 40% of those with savings accounts have less than $100 in the account. 
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">THE SOLUTION</div>
                        <div className="text-block">
                            Savings goals allows customers to organize their savings in a way that relates to their real-world goals
                            such as a needed car repair or an upcoming vacation. By attaching purpose to savings, customers have the
                            motivation to save and start building a healthy savings habit. With automation in the background,
                            saving becomes a low-effort experience.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">IMPACT</div>
                        <div className="text-block">
                            <b className="highlight-blue">For our customers</b> Savings goals brings clarity and meaning to saving by helping customers visualize what they are working towards. Framing savings as tangible goals gets customers past the intimidation of not knowing how to get started. As they work towards their goal, users start <b>building a savings habit that gets them closer to financial resiliency.</b>
                            <div className="spacing-075" />
                            <b className="highlight-blue">For the business:</b> As customers use this feature, they become a <b>more engaged user base</b> who become more likely to explore other features we offer. They also become more likely to <b>open additional bank or card accounts</b>—further <b>deepening their primary banking relationship</b> with Capital One. Creating a new tool to help customers save also leads to <b>increased customer satisfaction and higher net promoter scores.</b>
                        </div>
                    </div>
                </div>
                <div className='secondary-container' id='desktop'>
                    <ul className="secondary-info">
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li id='desktop'>Capital One - <br />Automatic Savings</li>
                            <li id='mobile'>Capital One - Automatic Savings</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Lead Product Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>1 year</li>
                        </ul>
                    </ul>
                </div>
                <div className='secondary-container' id='mobile'>
                    <ul className="secondary-info" id='horizontal'>
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li id='desktop'>Capital One - <br />Automatic Savings</li>
                            <li id='mobile'>Capital One - Automatic Savings</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Lead Product Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>1 Year</li>
                        </ul>
                    </ul>
                </div>
            </div>

            <div className="divider-container">
                <hr class="line" />
                <span class="label">The details</span>
                <hr class="line" />
            </div>
            <div className="centered">
                <div className="arrow-case-study centered">
                    <ChevronDownIcon className="h-6 w-6 text-black" />
                </div>
            </div>

            {/* detail section */}
            <div className="detail-section">
                <div id="goals-deco" />
                <div className="section-title text-secondary">define</div>
                <div className="pie-charts">
                    <div className='pie'>
                        <img src={pie1} alt="pie graph 1" loading="eager" />

                        47% of customers who primarily bank with Capital One cannot cover 1+ months of essential expenses from their savings account
                    </div>
                    <div className='pie'>
                        <img src={pie2} alt="pie graph 2" loading="eager" />

                        58% of customers have less than $400 across all bank accounts
                    </div>
                    <div className='pie'>
                        <img src={pie3} alt="pie graph 3" loading="eager" />

                        40% of Savings customers hold less than $100 with Capital One
                    </div>
                </div>
                <div className="spacing-3" />
                <div className="text-block">
                    <b>Who are we solving for?</b>
                    <br />
                    We were focused on solving for customers with low balances and/or no demonstrated history of savings balance growth. We defined three populations:
                </div>
                <div className="spacing-2" />
                <div className="callout-cards">
                    <div className="callout-card">
                        <b>Thin margins</b>
                        <br /><br />
                        Thin margins don’t think saving is worth it because the money remaining after covering expenses won’t amount to anything anyway.
                        <div className="spacing-075" />
                        They need to feel that <b>savings are tangible</b> in order to build and maintain a savings habit while still being able to cover expenses.
                    </div>
                    <div className="callout-card">
                        <b>Leaky buckets</b>
                        <br /><br />
                        Leaky buckets have the means to save but struggle because they don’t have a good way to manage their savings against their spend.
                        <div className="spacing-075" />
                        They need a <b>simple, clearly structured way to track their money</b> so they can spend only when they truly have enough.
                    </div>
                    <div className="callout-card">
                        <b>Beginners</b>
                        <br /><br />
                        Beginners know they should spend and save responsibly, but don’t know how to get started.
                        <div className="spacing-075" />
                        They need <b>a helping hand</b> and <b>a low barrier-of-entry</b> in order to feel less intimidated starting on their savings journey.
                    </div>
                </div>

                <div className="spacing-3" />

                <div className="text-block">
                    <b>Underserved customer needs</b>
                    <br />
                    We categorized the needs of all three populations as a lack of motivation or a lack of the correct tools. The motivation pieces helped us frame our experience while the tools helped us determine what features we needed.
                    <div className="spacing-2" />
                    <div className="callout-cards">
                        <div className="callout-card">
                            <b>Motivational needs</b>
                            <br /><br />
                            <ul>
                                <li>Motivation and accountability to sustain a savings behavior</li>
                                <li>Intrinsic motivation to feel that saving is meaningful and worthwhile</li>
                                <li>Extrinsic motivation to make them feel supported and confident that they are on the right track in their savings journey</li>
                            </ul>
                        </div>
                        <div className="callout-card">
                            <b>Tool-based needs</b>
                            <br /><br />
                            <ul>
                                <li>Tools to make savings more tangible and less abstract</li>
                                <li>Ways to track their  progress towards a stable savings cushion</li>
                                <li>Tools that reduce cognitive load and manual work to encourage success</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="goals-color" className="text-callout" >
                    Hypothesis: Savings goals would allow customers to organize their savings in a way that relates to their real-world goals,
                    making saving feel more tangible. Automating this process reduces effort while still giving users control over their savings.
                </div>
            </div>
            <div className="detail-section">
                <div id="goals-deco" />
                <div className="section-title text-secondary">design</div>
                <div className="text-block">
                    I began with a broad set of questions, from big experiential challenges to small interaction details. Each question carried its own set of implications and sparked more questions. I ultimately focused on the one with the greatest impact across the entire experience: funding a goal.
                </div>

                <div className="white-callout">
                    <div className="white-card">
                        <b >Initial questions</b>
                        <div id="goals-deco" className="deco-white-callout"></div>
                        <ul>
                            <li>How should the goals be funded? Automatically? How?</li>
                            <li>How many goals should customers be able to create?</li>
                            <li>Do customers have to set a goal date or a goal amount?</li>
                            <li>What happens when they reach their goal? Can they increase the goal amount? </li>
                            <li>What if customers withdraw money from their savings? Can goals be “protected” or will a withdrawal take away from their goal progress?</li>
                        </ul>
                    </div>
                </div>

                <div className="spacing-3" />
                <div className="text-block">
                    <b className='highlight-blue'>Goal funding</b>
                    <div className="spacing-075" />
                    
As a guiding principle on the Automatic Savings team, we wanted to automate as much as possible to lower the barrier of entry for customers unfamiliar with saving. So, I moved forward with two concepts: rules-funding and percentage-funding.
                </div>
                <div className="text-block">
                    <b>Funding via savings rules</b>
                    <br />
                    As a guiding principle, we wanted to automate as much as possible to lower the barrier of entry for customers unfamiliar with saving. We moved forward with two concepts: rules-funding and percentage-funding.
                </div>
                <div className="callout-cards">
                    <div className="callout-card" id="white-callout">
                        <img src={autopilot} alt="autopilot icon" loading="eager" />
                        <br />
                        <b>Autopilot</b>
                        <br /><br />
                        Scans checking account for a small amount to transfer to savings daily.
                        <div className="spacing-075" />
                        <b>Example use case:</b> You want a new pair of shoes—you fund it with Autopilot and wait until you have enough to make your purchase.
                    </div>
                    <div className="callout-card" id="white-callout">
                        <img src={recurring} alt="recurring transfers icon" loading="eager" />
                        <br />
                        <b>Recurring Transfers</b>
                        <br /><br />
                        Transfers money to savings on a regularly scheduled basis.
                        <div className="spacing-075" />
                        <b>Example use case:</b> You want to go on vacation in May—you set up a weekly $50 Recurring Transfer to reach your goal on time.
                    </div>
                    <div className="callout-card" id="white-callout">
                        <img src={paycheck} alt="paycheck percentage icon" loading="eager" />
                        <br />
                        <b>Paycheck Percentage</b>
                        <br /><br />
                        Moves a percentage of your paycheck into savings whenever you get paid.
                        <div className="spacing-075" />
                        <b>Example use case:</b> You want to an emergency buffer—you set Paycheck Percentage to move 10% of each paycheck directly into this goal.
                    </div>
                </div>

                <div className="text-block">
                    <b>Funding via parcentage distribution</b>
                    <br />
                    I explored percentage distribution as another method of automatic goal funding as early conversations with product and tech indicated that this might be the easier build. Whenever money entered your savings account, it would be distributed to your goals according to percentages you set.
                </div>
                <div className="callout-cards">
                    <div className="callout-card" id="white-callout">
                        <img id="percentage-split-img" src={percentageSplit} alt="percentage split visual" loading="eager" />
                    </div>
                </div>
                <div className="text-block">
                    <b>Concept testing</b>
                    <br />
                    In early concept testing, we determined that funding via savings rules was the ideal experience. It tested considerably better.: it was simpler, easy-to-understand, and matched customers’ mental models of saving.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={goalsConcepts} alt="Savings goals concept designs" loading="eager" />
                    </div>
                    <div className="caption">Sketch explorations into both methods of funding to concept-test comprehension, ease-of-use, and clarity.</div>
                </div>

                <div className="white-callout" >
                    <div className="white-card">
                        <b >Tech constraints</b>
                        <div id="goals-deco" className="deco-white-callout"></div>
                        As I pursued rules-funding further, the team discovered that while it was ideal, it was not feasible for MVP. Linking savings rules to goals would significantly increase the build time and consequently, the time to market. It required a new data tag and coordination with multiple tech teams to tag transaction properly for us to access the right data.
                        <br /><br />
                        Working with my product and tech partners, we determined that we needed to pivot and deliver automation through percentage-funding instead.
                    </div>
                </div>
                <div className='text-block'>
                    The biggest challenge was how to make percentages simple and easy to understand. The value of automatic funding was to make saving easier. What we built couldn’t be a barrier or create more work for customers. Through multiple rounds of user testing and iterations, I landed on a solution. By default, we’d distribute money coming into a savings account evenly into every goal, but the customers could still change the percentages as they see fit. 
                </div>

                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <img id='smaller' src={goalsGrayscales} alt="Savings goals grayscale designs" loading="eager" />
                    </div>
                    <div className="caption">Grayscale user flow exploring how to make percentage-funding easier to use and understand.</div>
                </div>

                <div className='text-block'>
                    Truing back to our goal of getting customers to start saving, I placed emphasis on goal creation. <b>Funding was our main challenge. For customers, it should be nearly invisible.</b> So, setting up a goal consisted of only 3 screens followed by a success screen. The only nod to funding was on the success screen—stating that the goal would be funded automatically, but you have the option to customize.
                </div>


                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption" id="blue1">
                        <img src={setup1} alt="name your goal screen" loading="eager" />
                        <img src={setup2} alt="choose goal amount screen" loading="eager" />
                        <img src={setup3} alt="set savings account screen" loading="eager" />
                        <img src={setup4} alt="success screen" loading="eager" />
                    </div>
                    <div className="caption">The set up flow focused on goal creation. The only mention of funding is on the success screen, after the goal is created.</div>
                </div>
                <div className='text-block'>
                    Those who want more control could access the “Edit funding” page to change their percentage distributions. This allowed for goal prioritization and additional flexibility. With helper texts and error states, we’d help them along the way with the math so funding felt simple and easy to adjust.
                </div>
                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption" id="blue2">
                        <img src={funding1} alt="50/50 split screen" loading="eager" />
                        <img src={funding2} alt="10/50 split screen" loading="eager" />
                        <img src={funding3} alt="70/50 split screen" loading="eager" />
                    </div>
                    <div className="caption">Editing the default percentage distribution to a custom distribution.</div>
                </div>
                <div className='text-block'>
                    For additional flexibility, I added manual money movement. Customers could move money from their unallocated funds (money in their savings account not in a goal) into any goal of choice—allowing customers the ability to jumpstart goals and have more control over their money,
                </div>
                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption" id="blue3">
                        <img src={manual1} alt="50/50 split screen" loading="eager" />
                        <img src={manual2} alt="10/50 split screen" loading="eager" />
                    </div>
                    <div className="caption">Manually adding money into a goal.</div>
                </div>

                <div className='text-block'>
                    With funding figured out, the other pieces fell into place. Most notable were goal creation, progress tracking, and goal completion.
                </div>
                <div className='slide-cards'>
                    <div className='lr-img-text'>
                        <div className='text'>
                            <b className='title highlight-blue'>Goal creation</b>
                            <div className='body-wrapper'>
                                <div className='body'>
                                    <b>What to prioritize?</b>
                                    <br />
                                    To help customers get started, I ran user testing on what people tended to save for and distilled this data into pre-selected options. These options make it easy for customers to set up a goal and help them frame what they might want to save for. 

                                    <div className='spacing-15' />
                                    Emergency fund is highlighted as the most prominent item: we want to help customers build financial resilience, but we don’t force them into it. To build a savings habit, any saving is a step in the right direction. Even if it’s towards a vacation, the act of saving gets customers into the habit and more comfortable with financial management.
                                </div>
                            </div>
                        </div>
                        <div className='imgs'>
                            <img id='single-goal-img' src={goalSelect} alt="goal selection screen" loading="eager" />
                        </div>
                    </div>
                </div>
                <div className='slide-cards'>
                    <div className='lr-img-text'>
                        <div className='text'>
                            <b className='title highlight-blue'>Progress tracking</b>
                            <div className='body-wrapper'>
                                <div className='body'>
                                    <b>Progress tracking as motivation</b>
                                    <br />
                                    The most important thing during a goal’s lifespan was seeing the progress. The visual indicator acts as extrinsic motivation—encouraging the user as
                                    they progress towards their goal. It also reinforces their intrinsic motivation as seeing the amount grow drives them towards completing it.
                                </div>
                            </div>
                        </div>
                        <div className='imgs'>
                            <img src={hub} alt="savings hub screen" loading="eager" />
                            <img src={details} alt="saving goals detail screen" loading="eager" />
                        </div>
                    </div>
                </div>
                <div className='slide-cards'>
                    <div className='lr-img-text'>
                        <div className='text'>
                            <b className='title highlight-blue'>Goal completion</b>
                            <div className='body-wrapper'>
                                <div className='body'>
                                    <b>Celebration to acknowledge achievement</b>
                                    <br />
                                    Celebration was an important moment. I wanted to emphasize the achievement: that customers have not only saved, but completed their goal. Confetti and congratulatory messaging acknowledges this achievement, extrinsically motivating the customer and urging them to make saving not just a one-time thing, but a continued habit.
                                </div>
                            </div>
                        </div>
                        <div className='imgs'>
                            <img src={hubComplete} alt="savings hub goal completion screen" loading="eager" />
                            <img src={detailsComplete} alt="saving goals detail completion screen" loading="eager" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="detail-section">
                <div id="goals-deco" />
                <div className="section-title text-secondary">implementation & next steps</div>
                <div className="text-block">
                    <b>Future refinement</b>
                    <br />
                    Throughout the process, many ideas that fell outside the scope of MVP. Though we’re funding with percentage distributions, funding via rules remains the ideal experience. Other enhancements such as goal dates, intelligent logic to help customers stay on track, and personalized recommendations based on a customer’s past savings behavior will push this experience to the next level.
                    <div className='spacing-15' />
                    <b>Handoff</b>
                    <br />
                    Working closely with product & tech, I detailed the behavior and edge cases of each screen and polished end-to-end designs, behavior logic, and screen interactions before handing off the documentation to the tech team. 
                    <div className='spacing-15' />
                    <b>Current status</b>
                    <br />
                    42% of customers who started using this feature have completed goals and 80% of customers who used goals have graduated to another savings tool, validating the hypothesis that savings goals helped them kickstart their savings journey towards financial resiliency. As this feature continues to roll out, we are measuring metrics like feature usage, graduation to other savings tools, average savings account balance, PBR growth, and net promoter scores.
                </div>
            </div>
            <Footer />
        </div>
        // </PasswordProtected>
    );
};

export default CaseStudySavingsGoals;
