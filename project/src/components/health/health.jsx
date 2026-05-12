export default function Health(){
    const apiKey ="gU3iTcin2LCG2zXge4kguKtfPtGkfzeM0t8QnSDvAE9rsQW1"
    const { data, pending, error } =useFetchData(`https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${apiKey}`);
    console.log(data);
    
    const [openList, setOpenList] = useState(false);

    const toggleDropDown = () => {
        setOpenList(!openList);
    }
    
    return (
        

    )
}; 