import style from "@/styles/GPTTrade.module.css";

export default function GPTTrade() {
    return (
        <div id="gpt-trade" className={style.container}>
            <div className={style.adventeges}>
                <div className={style.adventegesComponent}>
                    <h3>Machine Learning</h3>
                    <p>With thousands of trading simulations GPT Trade will learn each coin price movement and find the best trading strategy by using the latest Machine Learning technologies, gaining profit x3 times more than a human.</p>
                </div>
                <div className={style.adventegesComponent}>
                    <img src="/image/TrustedAlgorithms.png" alt="Trusted Algorithms" />
                    <h3>Trusted Algorithms</h3>
                    <p>Elon Musk's Al used in GPT Trade is a trusted word wide known Al with ultra-high performance</p>
                </div>
                <div className={style.adventegesComponent}>
                    <img src="/image/HyperSafety.png" alt="Hyper Safety" />
                    <h3>Hyper Safety</h3>
                    <p>GPT Trade can detect millions of trading patterns with Machine Learning in order to find the best strategy with more wins and less loses, giving a trading accuracy with up to 99.3%, that no human can provide</p>
                </div>
                <div className={style.adventegesComponent}>
                    <img src="/image/DataProtection.png" alt="Trusted Algorithms" />
                    <h3>Data Protection</h3>
                    <p>For protection GPT Trade encrypts all the important settings like API keys and email password with advanced encryption.</p>
                </div>
            </div>
            <div className={style.profit}>
                <h3>What is GPT Trade</h3>
                <div className={style.poweredBy}>
                    <p>Powerd by</p>
                    <img src="/image/openAI.png" alt="openAI" />
                </div>
                <p>GPT Trade - is leading cryptocurrency platform that allows users to trade in a fully qutomated mode using OpenAl technologies. This way, it allows you to trade and eam, regardless of whether you have experiance or not.</p>

                <button>Get your profit</button>
                <div className={style.profitButtonContainer}>
                    <img src="/image/robot.png" alt="robot" />
                </div>
            </div>
            <div className={style.tradeImg}>
                <img src="/image/trading.png" alt="trading" />
            </div>
            <div className={style.howWork}>
                <h3>
                    How GPT Trade AI works
                </h3>
                <p>GPT Al learns patterns in order to detect and predict a possible trend reversal.</p>
                <p>Uses Machine Learning to learn the patterns from the coin history.</p>
                <p>It automatically detects the best strategy and applies all the settings for each bot.</p>
                <p>It buys at support and sells at resistance, GPT Trade Al has a dynamic detection algorithm for support and resistance zones including zones which are new and not found in the chart aicelaya</p>
                <p>For sell orders it waits for all the sell indicators and if the conditions are not met then it waits for the next trend reversal zone.</p>
                <p>Can work with larger investments because it does not make short 2% trades, it can go long for up to 200-300% in a single trade.</p>
            </div>
        </div>
    )
}