import React, { Component } from 'react';
import "./pages.css";
import cryptic_encounters_screenshot from "./Images/cryptic_encounters_screenshot.png";
import GiddyItUp_screenshot from "./Images/GiddyItUp_screenshot.png";
import budget_tracker_screenshot from "./Images/budget_tracker_screenshot.png";
import teamgeneratorthumbnail from "./Images/teamgeneratorthumbnail.png";
import workout_screenshot_charts from "./Images/workout_screenshot_charts.png";
import weatherDashboard from "./Images/weatherDashboard.png";
import passwordGenerator from "./Images/03-javascript-homework-demo.png";
import Screenshot from "./Images/Screenshot.png";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <main className="container">
                    <section className="row">
                        <div className="col-xs-5 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <h1>Portfolio</h1>
                        </div>
                        <div className="col-xs-7 col-sm-6 col-md-8 col-lg-8 col-xl-8"></div>
                    </section>
                    <hr />
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <figure>
                            <a href="https://cryptic-encounter.herokuapp.com/">
                                <img
                                    src={cryptic_encounters_screenshot}
                                    className="portfolio-thumbnail"
                                    alt="Lauren Noeltner Portfolio Image"
                                />
                            </a>
                            <figcaption className="captionText">
                            "Cryptic Encounters: A Haunted House Adventure" - Dialogue-based
                            game with choices. Click the screenshot to play!
                            <a href="https://github.com/LNoeltner1/cryptic-encounters"
                                >|| Repository Link</a
                            >
                            </figcaption>
                        </figure>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                        <figure>
                            <a href="https://giddyitup-eg.herokuapp.com/">
                                <img
                                    src={GiddyItUp_screenshot}
                                    className="portfolio-thumbnail"
                                    alt="Lauren Noeltner Portfolio Image"
                                />
                            </a>
                            <figcaption className="captionText">
                                Wild West themed and gamified chore app for young children
                            <a href="https://github.com/LNoeltner1/GiddyItUp"
                                >|| Repository Link</a
                            >
                            </figcaption>
                        </figure>
                        
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <a
                            href="https://github.com/LNoeltner1/Employee_Summary_Template_Engine"
                        >
                            <figure>
                            <img
                                src={teamgeneratorthumbnail}
                                className="portfolio-thumbnail"
                                alt="Lauren Noeltner Portfolio Image"
                            />
                            <figcaption className="captionText">
                                HTML Employee Summary Page Generator CLI App
                            </figcaption>
                            </figure>
                        </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <a href="https://budget-tracker-lnoeltner.herokuapp.com/">
                            <figure>
                            <img
                                src={budget_tracker_screenshot}
                                className="portfolio-thumbnail"
                                alt="Lauren Noeltner Portfolio Image"
                            />
                            <figcaption className="captionText">
                                Online/Offline budget tracking app with listed expenses, income and a graphical representation of your spending.
                                <a href="https://github.com/LNoeltner1/budget-tracker"
                                >|| Repository Link</a
                            >
                            </figcaption>
                            </figure>
                        </a>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <a href="https://github.com/LNoeltner1/README_Generator">
                            <figure>
                            <img
                                src={Screenshot}
                                className="portfolio-thumbnail"
                                alt="Lauren Noeltner Portfolio Image"
                            />
                            <figcaption className="captionText">
                                A Professional ReadMe Generator CLI
                            </figcaption>
                            </figure>
                        </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <a href="https://lnoeltner1.github.io/API_Weather_Dashboard/"
                            ><figure>
                            <img
                                src={weatherDashboard}
                                className="portfolio-thumbnail"
                                alt="Lauren Noeltner Weather Dashboard"
                            />
                            <figcaption className="captionText">
                                Current Weather and 5-Day Forecast App using API calls
                                <a href="https://github.com/LNoeltner1/API_Weather_Dashboard"
                                >|| Repository Link</a
                            >
                            </figcaption>
                            </figure>
                        </a>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <a href="https://workout-tracker-3.herokuapp.com/">
                            <figure>
                            <img
                                src={workout_screenshot_charts}
                                className="portfolio-thumbnail"
                                alt="Lauren Noeltner Portfolio Image"
                            />
                            <figcaption className="captionText">
                                Workout tracker app with graphical breakdowns of recent workouts
                                <a href="https://github.com/LNoeltner1/workout_tracker"> || Repository Link</a>
                            </figcaption>
                            </figure>
                        </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <a href="https://lnoeltner1.github.io/Random_Password_Generator_App/"
                            ><figure>
                            <img
                                src={passwordGenerator}
                                className="portfolio-thumbnail"
                                alt="Lauren Noeltner Weather Dashboard"
                            />
                            <figcaption className="captionText">
                                Random Password Generator App with options for character type
                                <a href="https://github.com/LNoeltner1/Random_Password_Generator_App"> || Repository Link</a>
                            </figcaption>
                            </figure>
                        </a>
                        </div>
                    </section>
                    <br />
                    </main>
            </div>
        );
    }
}

export default Portfolio;