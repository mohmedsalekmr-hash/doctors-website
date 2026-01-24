import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Calendar({ selectedDate, onDateSelect }) {
    const { isRTL } = useLanguage();
    const [viewDate, setViewDate] = useState(new Date());

    const daysOfWeek = isRTL
        ? ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
        : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const months = isRTL
        ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
        : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const startOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const endOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    const prevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const isSelected = (day) => {
        if (!selectedDate) return false;
        const d = new Date(selectedDate);
        return d.getDate() === day &&
            d.getMonth() === viewDate.getMonth() &&
            d.getFullYear() === viewDate.getFullYear();
    };

    const isPast = (day) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        return d < today;
    };

    const handleDateClick = (day) => {
        if (isPast(day)) return;
        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        // Format as YYYY-MM-DD for consistency
        const formattedDate = date.toISOString().split('T')[0];
        onDateSelect(formattedDate);
    };

    const days = [];
    for (let i = 0; i < startDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-12 w-12" />);
    }
    for (let day = 1; day <= totalDays; day++) {
        const selected = isSelected(day);
        const past = isPast(day);
        days.push(
            <button
                key={day}
                type="button"
                disabled={past}
                onClick={() => handleDateClick(day)}
                className={`h-12 w-full flex items-center justify-center rounded-xl font-bold text-sm transition-all
                    ${selected ? 'bg-primary text-white shadow-clinical scale-110 z-10' : 'hover:bg-primary-light hover:text-primary'}
                    ${past ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600'}
                `}
            >
                {day}
            </button>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft w-full">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-primary">
                    {months[viewDate.getMonth()]} {viewDate.getFullYear()}
                </h3>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={prevMonth}
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50 text-slate-400 hover:text-primary transition-colors border border-slate-100"
                    >
                        <i className={`fa-solid ${isRTL ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                    </button>
                    <button
                        type="button"
                        onClick={nextMonth}
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50 text-slate-400 hover:text-primary transition-colors border border-slate-100"
                    >
                        <i className={`fa-solid ${isRTL ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
                    </button>
                </div>
            </div>

            <div className={`grid grid-cols-7 gap-1 mb-2 text-center ${isRTL ? 'rtl' : ''}`}>
                {daysOfWeek.map(day => (
                    <div key={day} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest h-8 flex items-center justify-center">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days}
            </div>
        </div>
    );
}
