/**
 * 
 * @returns {Object} quote information
 */
const fetchQuote = async()=> {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    console.log(data[0]);
    return data[0];

}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingBadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'BrakingBad App';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nexQuoteButton = document.createElement('button');

    nexQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) =>{
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel,authoLabel,nexQuoteButton);
    }

    nexQuoteButton.addEventListener('click',async()=>{
        quoteLabel.innerHTML = 'Loading...';
        authoLabel.innerHTML = '';
        
        const quote = await fetchQuote();
        renderQuote(quote);
    });

    fetchQuote()
        .then(renderQuote);
}