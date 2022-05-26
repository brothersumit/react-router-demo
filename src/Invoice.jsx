import { useParams } from "react-router-dom";

const Invoice = () => {
    let params = useParams();
    return ( 
        <h2>Invoice: {params.invoiceId}</h2>
     );
}
 
export default Invoice;