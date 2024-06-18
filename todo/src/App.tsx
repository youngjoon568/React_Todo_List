import React from "react";
import ContextProvider from "./(FSD)/apps/providers/ContextProvider";
import AppLayout from "./(FSD)/widgets/app/ui/AppLayout";
import TodoList from "./(FSD)/entities/todo/ui/TodoList";
import TodoLayout from "./(FSD)/widgets/todo/ui/TodoLayout";
import TodoHeader from "./(FSD)/widgets/todo/ui/TodoHeader";
import TodoCreateSection from "./(FSD)/widgets/todo/ui/TodoCreateSection";

const App = () => {
    return (
        <ContextProvider>
            <AppLayout>
                <TodoLayout>
                    <TodoHeader />
                    <TodoList />
                    <TodoCreateSection />
                </TodoLayout>
            </AppLayout>
        </ContextProvider>
    );
};

export default App;
