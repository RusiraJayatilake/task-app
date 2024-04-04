import React from 'react'

const Tasks = () => {
    const taskDate = [
        {
            title: "Task title 1",
            description: "Task Description 1",
            duedate: formatDate(new Date()),
            status: "Active"
        },
        {
            title: "Task title 2",
            description: "Task Description 2",
            duedate: formatDate(new Date()),
            status: "Inactive"
        }
    ];

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <>
            {taskDate.map((data, index) => (
                <tr key={index}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {data.title}
                            </p>
                        </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{data.description}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {data.duedate}
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hiddenclass="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span class="relative">{data.status}</span>
                        </span>
                    </td>
                </tr>       
            ))}
        </>                
    );
}
 
export default Tasks;