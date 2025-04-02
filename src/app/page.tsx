import Header from "@/components/Header";
import RootLayout from "./layout";
import Home from "@/components/Home";
import Start from "@/components/Strart";
import GPTTrade from "@/components/GPTTrade";
import Team from "@/components/Team";
import Manager from "@/components/Manager";
import Footer from "@/components/Footer";
import CryptoTable from "@/components/CryptoTable";
import "@/app/globals.css";
import Company from "@/components/Company";

const componentList = [
  { number: 1, title: "SING UP", text: "Enter your name, number and email to create an account. It`s free." },
  { number: 2, title: "EXPLORE THE PLATFORM", text: "See the power of OpenAI In trading by yourself" },
  { number: 3, title: "EARN", text: "Develop an individual strategy with a consultant and earn daily" },
];

const team = [
  { image: "/image/team/DenisMartin.png", name: "Denis Martin", position: "CEO GPT Trade" },
  { image: "/image/team/AshleyJones.png", name: "AshleyJones", position: "Product Manager" },
  { image: "/image/team/DonFrancis.png", name: "Don Francis", position: "Machine Learning Tech Lead" },
  { image: "/image/team/AlexJoung.png", name: "Alex Joung", position: "Trader Lead" },
];

const prideNumbers = [
  { value: "15", nameValue: "Years of Experience" },
  { value: "400K", nameValue: "Customers" },
  { value: "107M", nameValue: "Total profit gained last month" },
  { value: "22", nameValue: "Countries World Wide" },
  { value: "5", nameValue: "Industy Awards" },
];

export default function Main() {
  return (
    <RootLayout>
      <Header />
      <Home />
      <Start componentList={componentList} />
      <GPTTrade />
      <Team team={team} prideList={prideNumbers} />
      <div className="crypto-component">
        <CryptoTable />
      </div>
      <div className="company-component">
        <Company />
      </div>
      <Manager />
      <Footer />
    </RootLayout>
  );
}
