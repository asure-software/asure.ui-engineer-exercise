export const sortResults = (array, facet, order) => {
    if(order === 'ascending') {
        return array.sort((a,b)=> a[facet] - b[facet])
    } else {
        return array.sort((a,b)=> a[facet] - b[facet]).reverse()
    }
};

export const fetcher = (url, loading, complete) => {
   
    	loading(true);
    	fetch(url)
    	.then((response) => {
      		if(!response.ok) {
        	throw Error(response.statusText);
      	}
    	loading(false);
    	return response
    })
    	.then(response => response.json())
    	.then(response => complete(response))
    	.catch();
  	
}