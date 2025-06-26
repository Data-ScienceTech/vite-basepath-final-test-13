
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{t(`testimonials.testimonial${currentIndex + 1}.text`)}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {t(`testimonials.testimonial${currentIndex + 1}.author`)}
                  </div>
                  <div className="text-gray-600">
                    {t(`testimonials.testimonial${currentIndex + 1}.position`)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={prevTestimonial}
              className="p-2"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalTestimonials }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={nextTestimonial}
              className="p-2"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
