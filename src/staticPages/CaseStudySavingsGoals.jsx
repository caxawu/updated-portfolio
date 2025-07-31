import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import PasswordProtected from './PasswordProtected';

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
                <div id="text-white" className="text">
                    <div className="title">
                        Savings Goals
                    </div>
                    <div className="headline">
                        Helping customers build financial resilience and jumpstart a healthy savings habit.
                        Savings goals creates purpose and makes saving feel attainable as customers work towards a tangible goal.
                        <br /><br />
                        Currently set to launch in Q3 2025 with an associate pilot followed by rollout to 100% of customers.
                    </div>
                </div>
                <div className="header-img" id="align-center">
                    <img src={goalsHeader} alt="savings goals header" loading="eager" />
                </div>
            </div>

            {/* Summary section */}
            <div className='summary'>
                <div>
                    <div className="summary-section">
                        <div className="section-title bold">THE PROBLEM</div>
                        <div className="text-block">
                            “Saving” can be incredible amorphous and daunting. Many people feel like they <i>should</i> be saving money,
                            but don’t know to. Between feeling like they don’t have the means to save and not knowing how to begin
                            or how much to save, many end up not saving at all.
                            <div className="spacing-075" />
                            <b className="highlight-blue">The goal:</b> Make saving money feel tangible so customers actually start
                            saving and start building their financial resiliency.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div className="text-block">
                            Our research has shown that just $400 in savings allows most people to bounce back from an unexpected
                            financial challenge—our definition of financial resilience. 58% of customers who primarily bank with
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
                            <b className="highlight-blue">For our customers</b> Savings goals brings clarity and meaning to saving by helping customers visualize what they are saving towards. By framing savings as tangible goals, it gets customers past the intimidation of not knowing how to get started. As customers work towards their goal, they start building a savings habit that gets them closer to financial resiliency.
                            <div className="spacing-075" />
                            <b className="highlight-blue">For the business:</b> As customers use this feature, they become a more engaged customer base who become more likely to use other features we offer. They also become more likely to open additional bank or card accounts—further deepen their primary banking relationship with Capital One. A new tool also leads to increased customer satisfaction and higher net promoter scores.
                        </div>
                    </div>
                </div>

                <ul className="secondary-info">
                    <ul className="list">
                        <li className="bold">TYPE</li>
                        <li>Capital One - <br />Automatic Savings</li>
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

            <div class="divider-container">
                <hr class="line" />
                <span class="label">Dive into the details</span>
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
                        <br />
                        47% of customers who primarily bank with Capital One cannot cover 1+ months of essential expenses from their savings account
                    </div>
                    <div className='pie'>
                        <img src={pie2} alt="pie graph 2" loading="eager" />
                        <br />
                        58% of customers have less than $400 across all bank accounts
                    </div>
                    <div className='pie'>
                        <img src={pie3} alt="pie graph 3" loading="eager" />
                        <br />
                        40% of Savings customers hold less than $100 with Capital One
                    </div>
                </div>
                <div className="spacing-3" />
                <div className="text-block">
                    <b className='highlight-blue'>Who are we solving for?</b>
                    <br />
                    The customer base we are solving for are those with low balances and/or no demonstrated history of savings balance growth.
                    We defined this with three populations:
                    <div className="spacing-2" />
                    <b>Thin margins</b> don’t think savings are worth it because they think that the small amounts remaining after covering
                    expenses won’t amount to anything anyways. These customers need to feel that saving is tangible and not just for an abstract
                    future in order to build and maintain a savings habit that feels meaningful and worthwhile while still being able to cover expenses.
                    <div className="spacing-075" />
                    <b>Leaky buckets</b> have the means and ability to save but struggle to do so because they don’t have a good way to manage
                    their savings against their spend. This group needs to be able to easily manage their money in a clearly marked and measured way
                    in order to hold themselves financially responsible to spend only when they have enough.
                    <div className="spacing-075" />
                    <b>Beginners</b> know they should be spend and save responsibly. They need a helping hand alongside a low barrier-of-entry in order
                    to feel less intimidated getting started on their savings journey.
                </div>
                <div className="spacing-3" />
                <div className="text-block">
                    <b className='highlight-blue'>Underserved customer needs</b>
                    <br />
                    We grouped and categorized the needs of all three populations as either motivational needs or due to the lack of the correct tools.
                    The motivation piece helps us to frame our experience while the tools piece helped us to determine what features we needed.
                    <div className="spacing-2" />
                    <b>Motivational needs</b>
                    <ul>
                        <li>Motivation and accountability to sustain a savings behavior</li>
                        <li>Intrinsic motivation to feel that savings is meaningful and worthwhile</li>
                        <li>Extrinsic motivation that that makes them feel supported and confident that they are on the right track in their savings journey</li>
                    </ul>
                    <div className="spacing-075" />
                    <b>Tool-based needs</b>
                    <ul>
                        <li>Tools to make savings more tangible and less abstract</li>
                        <li>A stable savings cushion in order to increase their financial agency</li>
                        <li>A simple tool/process as cognitive load and manual work to save for specific goals inhibits success and discourages a sustained savings behavior</li>
                    </ul>
                </div>
                <div id="goals-color" className="text-callout">
                    Hypothesis: Savings goals would allow customers to organize their savings in a way that relates to their real-world goals—making
                    saving feel more tangible. Automating this process will make this a low-effort experience for users while giving
                    them control over their savings.
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
                        <li>What happens when customers withdraw money from their savings? Can goals be “protected” or will a withdrawal take away from their goal progress?</li>
                    </ul>
                    Each question came with a whole series of experiential implications and sparked their own set of more questions.
                    So, we started withone that had the most impact over the entire experience: funding a goal.
                </div>
                <div className="spacing-3" />
                <div className="text-block">
                    <b className='highlight-blue'>Goal funding</b>
                    <div className="spacing-075" />
                    <b>Savings rules</b>
                    <br />
                    As a guiding principle, we wanted to automate as much as possible to make the barrier of entry low for customers unfamiliar with savings.
                    Within the suite of savings features, we already had savings rules:
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
                    The idea was to tie these savings rules as the method to automatically fund goals. Maybe you want to save up for a pair of shoes so
                    you fund it with Autopilot where you’ll wait until you have enough to make your purchase. Maybe you want to go on vacation by August
                    so you fund it with Recurring Transfers to add $50 into your goal every week. Automatically funding a goal this way our the ideal
                    customer experience and would leverage an existing savings feature to make the entire suite of savings tools more robust.
                </div>
                <div className="white-callout">
                    <div className="white-card">
                        <b >Tech constraints</b>
                        <div id="goals-deco" className="deco-white-callout"></div>
                        As we pursued this approach further, we discovered that linking savings rules as the method of funding goals would significantly
                        increase the build time and consequently, time to market. It would require multiple tech teams from across the business to tag transactions appropriately
                        so that we would be able to link rules to a specific goal.
                        <br /><br />
                        In working with our product and tech partners, we determined that this ideal approach was not feasible for MVP. So, we had to pivot: how
                        do we still make this as simple as possible for customers through automation?
                    </div>
                </div>
                <b>Percentage distribution</b>
                <br />
                We turned to another method of automatic goal funding: whenever money entered your savings account, distribute a certain percentage of that into a goal.

                <div className="img-row">
                    <div className="img-single">
                        <img id="percentageSplitImg" src={percentageSplit} alt="percentage split visual" loading="eager" />
                    </div>
                </div>
                <div className='text-block'>
                    In early user concept testing, savings rules tested better. So, the biggest challenge with using percentages was making it a simple and easy to understand process.
                    The whole point of automatic funding was to make it easier for customers. We had to be careful not to create a system that was confusing and end up creating more work.
                    <br /><br />
                    Through multiple rounds of iteration and user testing, we landed on a solution. We’d distribute money coming into a savings account evenly into each goal by default but
                    give the customers the option to change the percentages as they see fit. Truing back to our goal to get customers to <i>start</i> saving, we placed emphasis on the goal creation.
                    Funding was our main challenge. But for customers, it should be nearly invisible. So, our setup sequence consisted of only 3 screens and a success screen. The only nod to
                    funding was on the success screen—stating that the goal would be funded automatically, but you have the option to customize if you would like.
                </div>
                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption">
                        <img src={setup1} alt="name your goal screen" loading="eager" />
                        <img src={setup2} alt="choose goal amount screen" loading="eager" />
                        <img src={setup3} alt="set savings account screen" loading="eager" />
                        <img src={setup4} alt="success screen" loading="eager" />
                    </div>
                    <div className="caption">The set up flow: focused on goal creation with the only nod to funding being on the success screen, after the goal is created.</div>
                </div>

                If someone wanted a little more control and prioritize a goal over another, they could access the “Edit funding” page and update to their desired percentage distributions.
                With helper texts and error states, we’d help them along the way with the math so funding felt simple and easy to adjust.
                <div className="full-caption" id="goals-setup">
                    <div className="img-row-w-caption" >
                        <img src={funding1} alt="50/50 split screen" loading="eager" />
                        <img src={funding2} alt="10/50 split screen" loading="eager" />
                        <img src={funding3} alt="70/50 split screen" loading="eager" />
                    </div>
                    <div className="caption">Editing the default percentage distribution to a custom distribution.</div>
                </div>

                To give customers even more control over funding, we added manual money movement. Customers could move money from their savings account not already in a goal (unallocated)
                into any goal of choice. This also gives customers the added flexibility to jumpstart their goal.
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
                            <img src={goalSelect} alt="goal selection screen" loading="eager" />
                        </div>
                        <div className='text'>
                            <b>What to prioritize?</b>
                            <br/>
                            To reduce the mental load on knowing how to save, we ran user testing on what people tend to save towards. We distilled this into the most common categories 
                            for customers to select. This contributes both towards making it easy for customers to set up a goal in this flow and to help them frame what they might want to save for. 
                            <br/><br/>
                            We highlight emergency fund as the most prominent item to help customers build financial resilience, but do not force them into it. To start building a savings habit, 
                            any sort of savings is a step in the right direction: even if its towards a vacation, the act of saving gets customers in the habit and more comfortable with saving. 
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
                            The most important thing during the lifespan of a goal was seeing the progress. The visual indicator acts as extrinsic motivation, making customers feel like 
                            they are accomplishing their goal. It also reinforces intrinsic motivation as seeing the bar fill up makes customers want to work towards completing it.
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
                            Celebration was an important moment of the experience. Once a goal is completed, we use confetti and a clear CTA to acknowledge and emphasize the achievement. 
                            With the feeling that you’ve not only saved, but <i>completed</i> your goal of saving a particular amount, we urge customers to make saving not just a one-thing thing, but a continued habit.
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
                    Throughout the process we generated many ideas that fell outside the scope of MVP. Post-launch, we are working towards the
                    destination state that incorporates more of these items. Though percentage distribution is the method of automatic funding,
                    rules funding remains the ideal experience. Other elements such as adding a goal date, logic to get customers to their goals on
                    time, and customization/ recommendations based on a customer’s past saving behavior will push this experience to the next level.
                    <br /> <br />
                    <b>Current status</b>
                    <br />
                    Working closely with product & tech, we detailed the behavior and edge cases of each screen to prep for tech build. I outlined the
                    end-to-end designs, behaviors, and interactions for this feature before handing off this project. The build is currently underway,
                    set to finish by Q3 2025 with an associate pilot followed by a scaled-up customer pilot.
                </div>
            </div>
        <Footer />
        </div>
        </PasswordProtected>

    );
};

export default CaseStudySavingsGoals;
