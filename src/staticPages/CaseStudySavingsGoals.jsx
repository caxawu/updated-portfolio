import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useNavigate } from "react-router-dom";

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import PasswordProtected from './PasswordProtected';
import FadeInImage from './FadeInImage';

import goalsHeader from '../assets/images/caseStudies/goals/goals-header.png'
import pie1 from '../assets/images/caseStudies/goals/pie1.png'
import pie2 from '../assets/images/caseStudies/goals/pie2.png'
import pie3 from '../assets/images/caseStudies/goals/pie3.png'
import autopilot from '../assets/images/caseStudies/goals/autopilot.png'
import recurring from '../assets/images/caseStudies/goals/recurring.png'
import paycheck from '../assets/images/caseStudies/goals/paycheck.png'
import percentageSplit from '../assets/images/caseStudies/goals/percentage-split.png'
import setup1 from '../assets/images/caseStudies/goals/setup1.png'
import setup2 from '../assets/images/caseStudies/goals/setup2.png'
import setup3 from '../assets/images/caseStudies/goals/setup3.png'
import setup4 from '../assets/images/caseStudies/goals/setup4.png'
import funding1 from '../assets/images/caseStudies/goals/funding1.png'
import funding2 from '../assets/images/caseStudies/goals/funding2.png'
import funding3 from '../assets/images/caseStudies/goals/funding3.png'
import manual1 from '../assets/images/caseStudies/goals/manual1.png'
import manual2 from '../assets/images/caseStudies/goals/manual2.png'
import goalSelect from '../assets/images/caseStudies/goals/goalSelect.png'
import details from '../assets/images/caseStudies/goals/details.png'
import hub from '../assets/images/caseStudies/goals/hub.png'
import detailsComplete from '../assets/images/caseStudies/goals/detailsComplete.png'
import hubComplete from '../assets/images/caseStudies/goals/hubComplete.png'

import ToTopButton from './ToTopButton';
import Footer from './Footer';


const CaseStudySavingsGoals = (props) => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        console.log('page=>', window.location.pathname);
    }, []);

    const navigateTo = useNavigate();

    return (
        <PasswordProtected>
        <div className="content-case-study">
            <ToTopButton />
            <div id="goals-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
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
                        Currently set to launch in Q3 2025 with an associate pilot followed by rollout to 100% of customers.
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
                            “Saving” can be incredible amorphous and daunting. Many people feel like they <i>should</i> be saving money,
                            but don’t know to. Between feeling like they don’t have the means to save and not knowing how to begin, 
                            many end up not saving at all.
                            <div className="spacing-075" />
                            <b className="highlight-blue">The goal:</b> Make saving money feel tangible so customers actually start
                            saving and start building their financial resiliency.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div className="text-block">
                            Our research has shown that just $400 in savings allows most people to bounce back from an unexpected
                            financial challenge—forming our definition of financial resilience. 58% of customers who primarily bank with
                            Capital One have less than $400 across all bank accounts. Of those with savings accounts, 40% have
                            less than $100 in the account.
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
                            <b className="highlight-blue">For our customers</b> Savings goals brings clarity and meaning to saving by helping customers visualize what they are working towards. Framing savings as tangible goals gets customers past the intimidation of not knowing how to get started. As they work towards their goal, users start building a savings habit that gets them closer to financial resiliency.
                            <div className="spacing-075" />
                            <b className="highlight-blue">For the business:</b> As customers use this feature, they become a more engaged user base who become more likely to explore other features we offer. They also become more likely to open additional bank or card accounts—further deepen their primary banking relationship with Capital One. Creating a new tool to help customers save also leads to increased customer satisfaction and higher net promoter scores.
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
                            <li>Lead UI/UX designer</li>
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
                            <li>Lead UI/UX designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>1 year</li>
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
                    <b className='highlight-blue'>Who are we solving for?</b>
                    <br />
                    We were focused on solving for customers with low balances and/or no demonstrated history of savings balance growth.
                    We defined three populations:
                    <div className="spacing-2" />
                    <b>Thin margins</b> don’t think saving is worth it because the money remaining after covering
                    expenses won’t amount to anything anyway. These customers need to feel that savings are tangible and worthwhile
                    in order to build and maintain a savings habit while still being able to cover expenses.
                    <div className="spacing-075" />
                    <b>Leaky buckets</b> have the means and ability to save but struggle to do so because they don’t have a good way to manage
                    their savings against their spend. They need to be able to easily manage their money in a clearly marked and measured way
                    in order to hold themselves financially responsible to spend only when they have enough.
                    <div className="spacing-075" />
                    <b>Beginners</b> know they should spend and save responsibly, but don't know how to get started. They need a helping hand and a low barrier-of-entry 
                    in order to feel less intimidated starting on their savings journey.
                </div>
                <div className="spacing-3" />
                <div className="text-block">
                    <b className='highlight-blue'>Underserved customer needs</b>
                    <br />
                    We categorized the needs of all three populations as either a lack of motivation or a lack of the correct tools.
                    The motivation pieces helped us frame our experience while the tools helped us determine what features we needed.
                    <div className="spacing-2" />
                    <b>Motivational needs:</b>
                    <ul>
                        <li>Motivation and accountability to sustain a savings behavior</li>
                        <li>Intrinsic motivation to feel that saving is meaningful and worthwhile</li>
                        <li>Extrinsic motivation to make them feel supported and confident that they are on the right track in their savings journey</li>
                    </ul>
                    <div className="spacing-075" />
                    <b>Tool-based needs:</b>
                    <ul>
                        <li>Tools to make savings more tangible and less abstract</li>
                        <li>Ways to track their  progress towards a stable savings cushion</li>
                        <li>Tools that reduce cognitive load and manual work to encourage success</li>
                    </ul>
                </div>
                <div id="goals-color" className="text-callout">
                    Hypothesis: Savings goals would allow customers to organize their savings in a way that relates to their real-world goals, 
                    making saving feel more tangible. Automating this process reduces effort while still giving users control over their savings.
                </div>
            </div>
            <div className="detail-section">
                <div id="goals-deco" />
                <div className="section-title text-secondary">design</div>
                <div className="text-block">
                    We started with a lot of open questions:
                    <ul>
                        <li>How should the goals be funded? Automatically? How?</li>
                        <li>How many goals should customers be able to create?</li>
                        <li>Do customers have to set an goal date or a goal amount?</li>
                        <li>What happens when they reach their goal? Can they increase the goal amount? </li>
                        <li>What if customers withdraw money from their savings? Can goals be “protected” or will a withdrawal take away from their goal progress?</li>
                    </ul>
                    Each question came with a whole set of experiential implications and sparked even more questions.
                    So, we started with one that had the most impact over the entire experience: funding a goal.
                </div>
                <div className="spacing-3" />
                <div className="text-block">
                    <b className='highlight-blue'>Goal funding</b>
                    <div className="spacing-075" />
                    <b>Savings rules</b>
                    <br />
                    As a guiding principle, we wanted to automate as much as possible to lower the barrier of entry for customers unfamiliar with saving.
                    We already had several existing "savings rules" to automate saving.
                    <div className='savings-rules'>
                        <div className='savings-rule'>
                            <img src={autopilot} alt="autopilot icon" loading="eager" />
                            <div className='description'>
                                <b>Autopilot</b>
                                <br />
                                Scans checking account for a small amount to transfer to savings daily
                            </div>
                        </div>
                        <div className='savings-rule'>
                            <img src={recurring} alt="recurring transfers icon" loading="eager" />
                            <div className='description'>
                                <b>Recurring transfers</b>
                                <br />
                                Transfer money to savings on a recurring basis
                            </div>
                        </div>
                        <div className='savings-rule'>
                            <img src={paycheck} alt="paycheck percentage icon" loading="eager" />
                            <div className='description'>
                                <b>Paycheck percentage</b>
                                <br />
                                Moves a percentage of your paycheck into savings whenever you get paid
                            </div>
                        </div>
                    </div>
                    The idea was to tie these rules to goals as the method of automatic funding. Maybe you want to save for a new pair of shoes—you fund it with 
                    Autopilot and wait until you have enough to make your purchase. Maybe you want to go on vacation in August—you fund it with Recurring Transfers 
                    to add $50 into your goal every week. This was our ideal customer experience. It would leverage an existing savings tools, making the entire suite 
                    of offered products more robust.
                </div>
                <div className="white-callout">
                    <div className="white-card">
                        <b >Tech constraints</b>
                        <div id="goals-deco" className="deco-white-callout"></div>
                        As we pursued this approach further, we discovered that linking savings rules to goals would significantly increase the build time and consequently, 
                        the time to market. It would require a new data tag and coordination with multiple tech teams to properly tag transaction for us to access the right data.
                        <br /><br />
                        Working with our product and tech partners, we determined that this approach, though ideal, was not feasible. So, we pivoted: how do we deliver automation 
                        without linking to savings rules?
                    </div>
                </div>
                <b>Percentage distribution</b>
                <br />
                We turned to another method of automatic goal funding: whenever money entered your savings account, distribute a certain percentage of that into a goal.

                <div className="img-row">
                    <div className="img-single">
                        <img id="percentage-split-img" src={percentageSplit} alt="percentage split visual" loading="eager" />
                    </div>
                </div>
                <div className='text-block'>
                    In early concept testing, savings rules tested better. Because it was no longer feasible, the biggest challenge became how to make percentages 
                    simple and easy to understand. The value of automatic funding was to make saving easier, so we had to ensure it didn’t become overwhelming or create more work.
                    <div className='spacing-105'/>
                    Through multiple rounds of user testing and iterations, we landed on a solution. By default, we’d distribute money coming into a savings account evenly into every goal. 
                    But, the customers could still change the percentages as they see fit. Truing back to our goal of getting customers to start saving, we placed emphasis on goal creation. 
                    Funding was <i>our</i> main challenge. For customers, it should be nearly invisible. So, setting up a goal consisted of only 3 screens followed by a success screen. 
                    The only nod to funding was on the success screen—stating that the goal would be funded automatically, but you have the option to customize.
                </div>
                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption">
                        <img src={setup1} alt="name your goal screen" loading="eager" />
                        <img src={setup2} alt="choose goal amount screen" loading="eager" />
                        <img src={setup3} alt="set savings account screen" loading="eager" />
                        <img src={setup4} alt="success screen" loading="eager" />
                    </div>
                    <div className="caption">The set up flow focused on goal creation. The only mention of funding is on the success screen, after the goal is created.</div>
                </div>

                Those who want more control could access the “Edit funding” page to change their percentage distributions. This allowed for goal prioritization and additional flexibility. 
                With helper texts and error states, we’d help them along the way with the math so funding felt simple and easy to adjust.
                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption" >
                        <img src={funding1} alt="50/50 split screen" loading="eager" />
                        <img src={funding2} alt="10/50 split screen" loading="eager" />
                        <img src={funding3} alt="70/50 split screen" loading="eager" />
                    </div>
                    <div className="caption">Editing the default percentage distribution to a custom distribution.</div>
                </div>

                To give customers even more control, we added manual money movement. Customers could move money from their unallocated funds (money in their savings account notn a goal) into 
                any goal of choice—allowing customers the ability to jumpstart goals and have more flexibility over their money,
                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption" >
                        <img src={manual1} alt="50/50 split screen" loading="eager" />
                        <img src={manual2} alt="10/50 split screen" loading="eager" />
                    </div>
                    <div className="caption">Manually adding money into a goal.</div>
                </div>

                <div className='text-block'>
                    With funding figured out, the other pieces fell into place. Most notable were goal creation, progress tracking, and goal completion.
                </div>
                <div className='text-block'>
                    <b className='highlight-blue'>Goal creation</b>
                    <div className='lr-img-text'>
                        <div className='imgs'>
                            <img id='single-goal-img' src={goalSelect} alt="goal selection screen" loading="eager" />
                        </div>
                        <div className='text'>
                            <b>What to prioritize?</b>
                            <br/>
                            To help customers get started, we ran user testing on what people tended to save towards. This data was distilled into pre-selected options. 
                            These options make it easy for customers to set up a goal and help them frame what they might want to save for. 

                            <div className='spacing-105'/>
                            Emergency fund is highlighted as the most prominent item since we wanted to help customers build financial resilience—though we do not force them 
                            into it. To build a savings habit, any saving is a step in the right direction. Even if its towards a vacation, the act of saving gets customers 
                            into the habit and more comfortable with financial management.
                        </div>
                    </div>
                </div>
                <div className='text-block'>
                    <b className='highlight-blue'>Progress tracking</b>
                    <div className='lr-img-text'>
                        <div className='imgs'>
                            <img src={hub} alt="savings hub screen" loading="eager" />
                            <img src={details} alt="saving goals detail screen" loading="eager" />
                        </div>
                        <div className='text'>
                            <b>Progress tracking as motivation</b>
                            <br/>
                            The most important thing during a goal’s lifespan was seeing the progress. The visual indicator acts as extrinsic motivation—encouraging the user as 
                            they progress towards their goal. It also reinforces their intrinsic motivation as seeing the amount grow drives them towards completing it.
                        </div>
                    </div>
                </div>
                <div className='text-block'>
                    <b className='highlight-blue'>Goal completion</b>
                    <div className='lr-img-text'>
                        <div className='imgs'>
                            <img src={hubComplete} alt="savings hub goal completion screen" loading="eager" />
                            <img src={detailsComplete} alt="saving goals detail completion screen" loading="eager" />
                        </div>
                        <div className='text'>
                            <b>Celebration to acknowledge achievement</b>
                            <br/>
                            Celebration was an important moment. Once a goal is completed, we use confetti and congratulatory messaging to acknowledge and emphasize the achievement. 
                            With the feeling that you’ve not only saved, but completed your goal of saving a particular amount, we urge customers to make saving not just a one-time thing, but a continued habit.
                        </div>
                    </div>
                </div>

            </div>
            <div className="detail-section">
                <div id="goals-deco" />
                <div className="section-title text-secondary">implementation & next steps</div>
                <div className="text-block">
                    <b>The idea parking lot</b>
                    <br />
                    Throughout the process we generated many ideas that fell outside the scope of MVP. Post-launch, we are working towards the destination state that 
                    incorporates more of these items. Though we’re funding with percentage distributions, funding via rules remains the ideal experience. Other enhancements such as 
                    goal dates, intelligent logic to help customers stay on track, and personalized recommendations based on a customer’s past savings behavior will push this 
                    experience to the next level.
                    <div className='spacing-105'/>
                    <b>Current status</b>
                    <br />
                    Working closely with product & tech, we detailed the behavior and edge cases of each screen. We polished end-to-end designs, behavior logic, and screen 
                    interactions before handing off the documentation to the tech team. The build is currently underway, set to finish in Q3 2025. We will launch with an associate 
                    pilot followed by a customer pilot before rolling out to all customers.
                </div>
            </div>
        <Footer />
        </div>
        </PasswordProtected>
    );
};

export default CaseStudySavingsGoals;
