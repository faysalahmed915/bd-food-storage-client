import React from 'react';
import { useLoaderData } from 'react-router';
import ExpiredFoodCard from '../Components/Foods/ExpiredFoodCard';
import StatsCountUp from '../Components/DateCount/StatsCountUp';
import AwesomeReveal from '../Components/HomeComponents/AwesomeReveal';
import QuoteHighlight from '../Components/HomeComponents/QuoteHighlight';
import FeatureGrid from '../Components/HomeComponents/FeatureGrid';

const Home = () => {

    const allFoods = useLoaderData()
    const isExpired = (expiryDate) => {
        return new Date(expiryDate) < new Date();
    }
    const expiredFoods = allFoods.filter(food => isExpired(food.expiryDate));


    return (
        <div>
            <section className=' px-2 md:px-4 lg:px-8 max-w-7xl mx-auto'>
                <AwesomeReveal></AwesomeReveal>
            </section>

            <section className='px-2 md:px-4 lg:px-8 max-w-7xl mx-auto'>

                <StatsCountUp allFoods={allFoods} />
            </section>

            <section className="px-2 md:px-4 lg:px-8 max-w-7xl mx-auto py-2 md:py-4 lg:py-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Expired Food Items</h1>

                {expiredFoods.length === 0 ? (
                    <p className="text-gray-500">No expired items are there.</p>
                ) : (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">


                        {expiredFoods.map(food => (
                            <ExpiredFoodCard key={food._id} food={food} />
                        ))}


                    </div>
                )}

            </section>
            <section className=' px-2 md:px-4 lg:px-8 max-w-7xl mx-auto'>
                <QuoteHighlight></QuoteHighlight>
            </section>
            <section className=' px-2 md:px-4 lg:px-8 max-w-7xl mx-auto'>
                <FeatureGrid></FeatureGrid>
            </section>
        </div>
    );
};

export default Home;