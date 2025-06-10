import React, { useState } from 'react';
import Sidebar from '../Pages/Sidebar/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileMenu from '../Pages/Navbar/ProfileMenu';
import { ChevronDown, Filter, Search } from 'lucide-react';

const Overview = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0));

  const cards = [
    {
      icon: 'bi-person-fill',
      number: 150,
      title: 'Total Clients',
      bgColor: '#19C0CA',
      textColor: 'text-white',
      buttonBorder: 'border-white',
    },
    {
      icon: 'bi-people-fill',
      number: 150,
      title: 'Total Properties',
      bgColor: '#2053D8',
      textColor: 'text-white',
      buttonBorder: 'border-white',
    },
    {
      icon: 'bi-house-fill',
      number: 150,
      title: 'Total Inspections',
      bgColor: '#033C3B',
      textColor: 'text-white',
      buttonBorder: 'border-white',
    },
    {
      icon: 'bi-person-check-fill',
      number: 150,
      title: 'Total Home Inspectors',
      bgColor: '#FFC60C',
      textColor: 'text-white',
      buttonBorder: 'border-white',
    },
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const [dates] = useState(['4/26/2025', '4/26/2025', '4/26/2025', '4/26/2025', '4/26/2025']);
  const cardColors = ['bg-green-600', 'bg-blue-600', 'bg-yellow-500', 'bg-purple-500', 'bg-gray-900'];

  return (
    <Container fluid className="p-0 m-0">
      <Row className="g-0">
        <Col xs={9} md={1} className="d-none d-md-block">
          <Sidebar />
        </Col>
        <Col xs={12} md={11} className="overflow-hidden">
          <ProfileMenu />

          <div className="px-3 py-4">
            {/* Cards and Calendar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              {/* Cards */}
              <div className="w-full lg:w-8/12">
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`w-full sm:w-[180px] h-[280px] rounded-xl p-6 flex flex-col justify-between ${card.textColor}`}
                      style={{ backgroundColor: card.bgColor, maxWidth: '200px', height: '240px' }}
                    >
                      <div className='flex  items-center justify-between'>
                        <i className={`bi ${card.icon} text-2xl border rounded-full p-2`}></i>
                        <h2 className="text-3xl font-bold">{card.number}</h2>
                      </div>
                      <div>
                        
                        <h1 className="text-3xl ">{card.title}</h1>
                      </div>
                      <button
                        className={`w-full py-2 border ${card.buttonBorder} bg-white text-black rounded-md text-sm font-medium hover:bg-opacity-80 transition-all`}
                      >
                        Add New
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className="w-full lg:w-4/12">
                <div className="w-full max-w-[340px] mx-auto lg:mx-0" style={{ backgroundColor: '#D9D9D980' }}>
                  <div
                    className="flex justify-between items-baseline px-4 py-3 rounded-t-xl text-white"
                    style={{ backgroundColor: '#2053D8', height: '60px' }}
                  >
                    <h3 className="text-base font-semibold">
                      {monthNames[currentDate.getMonth()]}, {currentDate.getFullYear()}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevMonth}
                        className="w-8 h-8 bg-transparent text-white border rounded-full flex items-center justify-center hover:bg-white"
                      >
                        <i className="bi bi-chevron-left text-sm"></i>
                      </button>
                      <button
                        onClick={nextMonth}
                        className="w-8 h-8 bg-transparent text-white border rounded-full flex items-center justify-center hover:bg-white"
                      >
                        <i className="bi bi-chevron-right text-sm"></i>
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                        <div key={index} className="text-gray-500 font-medium">
                          {day}
                        </div>
                      ))}

                      {emptyDays.map((_, index) => (
                        <div key={`empty-${index}`} className="p-1"></div>
                      ))}

                      {daysArray.map((day) => (
                        <div
                          key={day}
                          className={`p-1 rounded-full ${day === 18 ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-200 text-gray-500'}`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agenda and Inspection List */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Agenda */}
              <div className="w-full lg:w-8/12">
                <div className="font-sans">
                  <h1 className="text-2xl font-bold mb-4">Agenda</h1>

                  <div className="bg-gray-100 rounded-xl p-6 overflow-x-auto">
                    {/* Header section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                      {/* Date */}
                      <div className="text-gray-800">
                        <span className="font-bold">Today,</span> 23 March
                      </div>

                      {/* Days of week */}
                      <div className="flex space-x-2 sm:space-x-4 overflow-x-auto">
                        {[
                          { day: 1, name: 'Mon' },
                          { day: 2, name: 'Tue' },
                          { day: 3, name: 'Wed', selected: true },
                          { day: 4, name: 'Thu' },
                          { day: 5, name: 'Fri' },
                          { day: 6, name: 'Sat' },
                        ].map((day) => (
                          <div key={day.day} className="flex flex-col items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex flex-col items-center justify-center ${
                                day.selected ? 'bg-green-800 p-4 text-white' : ''
                              }`}
                            >
                              <div className="text-sm font-medium">{day.day}</div>
                              <div className="text-xs">{day.name}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Controls */}
                      <div className="flex items-center">
                        <button className="bg-white border border-gray-200 rounded-md flex items-center px-3 py-1 mr-2">
                          <Search size={14} className="text-gray-500 mr-1" />
                          <span className="text-gray-500 text-sm">Month</span>
                          <ChevronDown size={14} className="text-gray-500 ml-1" />
                        </button>
                        <button className="bg-white border border-gray-200 rounded-md p-1">
                          <Filter size={16} className="text-gray-500" />
                        </button>
                      </div>
                    </div>

                    {/* Time slots - Make this section scrollable */}
                    <div className="space-y-8 min-w-[600px]">
                      {/* 9 AM */}
                      <div className="flex border-b border-gray-200">
                        <div className="w-16 text-gray-600 text-sm pt-16">9 am</div>
                        <div className="flex-1">
                          <div className="grid grid-cols-6">
                            <div className="space-y-1.5 mt-8">
                              <div className="bg-yellow-400 text-white ml-8 text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                                <span>INV - 124588</span>
                                <span className="ml-2">MUZ</span>
                              </div>
                              <div className="bg-blue-500 text-white ml-8 text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                                <span>INV - 124588</span>
                                <span className="ml-2">MUZ</span>
                              </div>
                              <div className="bg-blue-800 text-white ml-8 text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                                <span>INV - 124588</span>
                                <span className="ml-2">MUZ</span>
                              </div>
                              <div className="bg-green-600 text-white text-xs ml-8 px-2 py-1 w-48 rounded-md flex items-center justify-between" style={{ marginBottom: '-42px' }}>
                                <span>INV - 124588</span>
                                <span className="ml-2">MUZ</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 10 AM */}
                      <div className="flex border-b border-gray-200 pb-20">
                        <div className="w-16 text-gray-600 text-sm pt-20">10 am</div>
                        <div className="flex-1"></div>
                      </div>

                      {/* 11 AM */}
                      <div className="flex border-b border-gray-200 pb-20">
                        <div className="w-16 text-gray-600 text-sm">11 am</div>
                        <div className="flex-1"></div>
                      </div>

                      <div className="grid grid-cols-6" style={{ marginTop: '-49px' }}>
                        <div className="col-start-4 space-y-1.5">
                          <div className="bg-yellow-400 text-white text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-blue-500 text-white text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-gray-600 text-white text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-green-400 text-white text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                        </div>
                      </div>

                      {/* 12 PM */}
                      <div className="flex border-b border-gray-200 pb-20">
                        <div className="w-16 text-gray-600 text-sm">12 pm</div>
                        <div className="flex-1"></div>
                      </div>
                      <div className="grid grid-cols-6 ml-24 -mt-12" style={{ marginTop: '-48px' }}>
                        <div className="space-y-1.5">
                          <div className="bg-yellow-400 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-blue-500 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-black text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-gray-400 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                        </div>
                      </div>

                      {/* Noon */}
                      <div className="flex border-b border-gray-200 pb-20">
                        <div className="w-16 text-gray-600 text-sm">Noon</div>
                        <div className="flex-1"></div>
                      </div>
                      <div className="grid grid-cols-3" style={{ marginTop: '-48px' }}>
                        <div className="col-start-3 space-y-1.5">
                          <div className="bg-yellow-400 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-blue-500 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-black text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-gray-400 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                        </div>
                      </div>

                      {/* 2 PM */}
                      <div className="flex border-b border-gray-200 pb-20">
                        <div className="w-16 text-gray-600 text-sm">2 pm</div>
                        <div className="flex-1"></div>
                      </div>

                      <div className="grid grid-cols-6" style={{ marginTop: '-76px' }}>
                        <div className="col-start-3 space-y-1.5 mt-8">
                          <div className="bg-yellow-400 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-blue-500 text-white text-xs px-2 w-48 py-1 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-black text-white text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                          <div className="bg-gray-400 text-white text-xs px-2 py-1 w-48 rounded-md flex items-center justify-between">
                            <span>INV - 124588</span>
                            <span className="ml-2">MUZ</span>
                          </div>
                        </div>
                      </div>

                      {/* 3 PM */}
                      <div className="flex">
                        <div className="w-16 text-gray-600 text-sm">3 pm</div>
                        <div className="flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Inspection List */}
              <div className="w-full lg:w-4/12">
                 <h1 className="text-xl font-bold mb-4 text-gray-800">Inspection of the day</h1>
                <div className="bg-gray-100 p-4 rounded-lg mx-auto">
               

                  <div className="space-y-3">
                    {cardColors.map((borderColor, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                        <div className={`${borderColor} w-4`}></div>
                        <div className="flex-1 p-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center">
                              <div className="text-gray-700 mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-800">INV - 124568</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-gray-700 mr-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                  </svg>
                                </div>
                                <span className="text-sm text-gray-800">Client name</span>
                              </div>
                              <button className="text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div className="flex items-center">
                              <div className="text-gray-700 mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-800">Neighborhood</span>
                            </div>

                            <div className="flex items-center">
                              <div className="text-gray-700 mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-800">Furnished (684 sq.m)</span>
                            </div>

                            <div className="flex items-center col-span-1">
                              <div className="w-6 h-6 mr-2 flex-shrink-0 overflow-hidden">
                                <img
                                  src="https://randomuser.me/api/portraits/women/44.jpg"
                                  alt="Cameron Williamson"
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <span className="text-sm text-gray-800">Cameron Williamson</span>
                            </div>

                            <div className="text-right text-sm text-gray-400">{dates[index]}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;