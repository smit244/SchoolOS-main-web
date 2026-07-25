import { useState, useEffect } from 'react';
import { PricingPlan } from '../types';
import { PRICING_DATA } from '../data/mockData';

export const usePricingPlans = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost/SchoolOS/api/v1/pricing-plans/');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        console.warn('API fetch failed, falling back to local mock data:', err);
        // Graceful fallback to static data if API is down or not implemented yet
        setPlans(PRICING_DATA);
        setError('Failed to fetch from API, using fallback data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return { plans, isLoading, error };
};
