

**Easy Challenges (5)**

These focus on fundamental usage of the tools in straightforward scenarios.

1.  **Easy: Display Data from API**
    * Use TanStack Query and Axios to fetch a simple list of items (e.g., a few users or posts) from a public API (like JSONPlaceholder) and display them as a list.

2.  **Easy: Simple Global Counter**
    * Create a basic Zustand store with a single `count` state and actions to increment and decrement it. Build a component that displays the count and has two buttons to modify it using the Zustand actions.

3.  **Easy: Basic Form with Validation (Console Output)**
    * Build a simple form with 2-3 fields (e.g., name, email). Use `react-hook-form` for form management. Define a basic validation schema using `zod` and apply it. On submission, log the form data to the console (no API call yet).

4.  **Easy: Conditional Fetching Based on State**
    * Use `useState` to manage a boolean state (`shouldFetch`). Use TanStack Query's `enabled` option to fetch data from an API only when `shouldFetch` is true. Add a button to toggle the `shouldFetch` state.

5.  **Easy: Simple Data Mutation (Without Re-fetch)**
    * Display a static item. Add a button (e.g., "Mark as Done"). Use TanStack Query's `useMutation` and Axios to send a basic request (e.g., a PUT with a status update) to an API endpoint. Don't worry about re-fetching the data yet.


**Medium Challenges (10)**

These require integrating multiple tools or handling more complex scenarios like forms interacting with APIs, basic state synchronization, and error handling.

6.  **Medium: Create Item Form with Mutation & Invalidation**
    * Build a form using `react-hook-form` and `zod` to create a new item. On valid submission, use a TanStack Query mutation and Axios to send a POST request to the API. After a successful mutation, use `queryClient.invalidateQueries` to automatically re-fetch and update the list displayed in a *different* component.

7.  **Medium: Edit Item Form with Data Fetching & Pre-filling**
    * Fetch a specific item's details using TanStack Query based on an ID. Build an edit form using `react-hook-form` and `zod`. Pre-fill the form with the fetched data using RHF's `reset` or `defaultValues`. Use a mutation (PUT/PATCH) to update the item via Axios.

8.  **Medium: List with Loading, Error, and Empty States**
    * Fetch a list of items using TanStack Query. Explicitly handle and display different UI states: loading spinner while fetching, an error message if the fetch fails, a "No items found" message if the successful data array is empty, and the list itself when data is available.

9.  **Medium: Basic Pagination Implementation**
    * Fetch data from an API endpoint that supports pagination (e.g., `?page=1&limit=10`). Use `useState` or a Zustand store to manage the current page number. Use TanStack Query, updating the query key/parameters based on the page state. Add "Next" and "Previous" buttons. Consider using `keepPreviousData`.

10. **Medium: Dependent Queries Based on Form Input**
    * Build a form with a select input using `react-hook-form` and `zod` (e.g., selecting a user ID). Use a TanStack Query to fetch the list of users for the select options. Use a *second* dependent TanStack Query (`enabled` based on the selected user ID from the form state) to fetch data related to the selected user (e.g., their posts).

11. **Medium: Global Loading Indicator from Mutations**
    * Create a Zustand store to track if *any* TanStack Query mutation is currently running (`isMutating`). Update this state using the `onMutate`/`onSettled` callbacks of your mutations. Build a global component (e.g., a spinner in the header) that reads this Zustand state and displays a loading indicator when true.

12. **Medium: Optimistic Delete with Manual Cache Update**
    * Display a list of items fetched by TanStack Query. For each item, add a "Delete" button. Use a TanStack Query mutation for the DELETE request. Implement an optimistic update using `onMutate` to manually remove the item from the query cache (`queryClient.setQueryData`) *before* the API call responds. Use `onError` to roll back the change in the cache if the mutation fails.

13. **Medium: Form with Array of Fields (`useFieldArray`)**
    * Build a form using `react-hook-form` that allows adding multiple entries of the same type (e.g., adding multiple phone numbers or email addresses). Use `useFieldArray` for managing the list of fields. Define a `zod` schema that includes an array validation. Submit the structured data via a mutation.

14. **Medium: Debounced Input for Search Query Parameter**
    * Create a search input managed by `react-hook-form`. Use a debouncing technique (either a custom hook or a library utility) on the input value. Use the debounced value as a query parameter for a TanStack Query fetch to filter a list of items from the API *as the user types*, but without flooding the API with requests.

15. **Medium: Zustand State Derived from Fetched Data**
    * Fetch a list of items using TanStack Query. Create a Zustand store. In the component that fetches the data, update the Zustand store with a derived piece of state based on the fetched data (e.g., storing the total count of items, or the ID of the first item) using `onSuccess`. Use this derived state in another component.

---

**Hard Challenges (15)**

These combine multiple libraries in more complex patterns, involve advanced features, or require careful state synchronization and error handling across different concerns.

16. **Hard: Multi-Step Form with Zustand & Final Submission**
    * Build a complex multi-step form. Use `react-hook-form` for each step's fields and `zod` for per-step validation. Store the data collected in previous steps in a Zustand store. Implement navigation between steps. On the final step, collect all data from the Zustand store and the final step's RHF state, then submit the complete payload using a TanStack Query mutation. Handle loading/error for the final submission.

17. **Hard: Infinite Scrolling with `useInfiniteQuery`**
    * Implement infinite scrolling for a list of items fetched from a paginated API. Use TanStack Query's `useInfiniteQuery`. Handle loading the next page (`WorkspaceNextPage`, `isFetchingNextPage`) and integrate with a scroll detection mechanism (e.g., `IntersectionObserver` or a scroll event listener) to automatically load more data as the user scrolls down.

18. **Hard: Advanced Optimistic Update with Manual Cache Manipulation**
    * Implement an optimistic update for an item modification (e.g., toggling a 'completed' status on a todo list item). Use `useMutation`. In `onMutate`, *manually find and update the specific item within the cached list array* using `queryClient.setQueryData`. Implement robust rollback in `onError`, potentially requiring access to the previous list state saved in `onMutate`.

19. **Hard: Form with Dynamically Generated Zod Schema & RHF Fields**
    * Fetch a configuration object from an API using TanStack Query that describes a form structure (field names, types, validation rules). Dynamically generate a `zod` schema and render the corresponding input fields (`react-hook-form`) based on this fetched configuration. Submit the data via a mutation.

20. **Hard: Real-time Polling for Data Updates**
    * Fetch a status or data feed that changes periodically (e.g., a stock price, a job status). Use TanStack Query's `refetchInterval` to automatically poll the API at a set interval. Display the updating data. Implement controls to start/stop the polling.

21. **Hard: Custom Hook for Resource Management (CRUD)**
    * Create a single custom React hook (e.g., `useUsers`) that encapsulates fetching a list of users (`useQuery`) and the mutations for creating, updating, and deleting users (`useMutation`). This hook should provide the data, loading/error states, and mutation functions, abstracting the TanStack Query logic.

22. **Hard: Integrating Server-Side Validation Errors into React Hook Form**
    * When a form submission mutation fails due to validation errors returned by the API (e.g., a 400 status with an error payload), parse the error response. Use `react-hook-form`'s `setError` method to display the specific server-side validation errors under the corresponding form fields.

23. **Hard: Synchronizing Zustand State with TanStack Query Cache**
    * Fetch a list of items using TanStack Query. When a user clicks on an item, set a `selectedItemId` in a Zustand store. Create a selector in the Zustand store that finds and returns the *full item object* from the TanStack Query cache based on the `selectedItemId`, without needing another API call if the list is already cached.

24. **Hard: Global Error Handling with Zustand Notifications**
    * Implement a centralized error handling strategy. Use the `onError` callbacks in your TanStack Query queries and mutations to catch API errors. In these callbacks, dispatch actions to a Zustand store managing a global list of notifications. Display these notifications in a dedicated UI component, allowing users to dismiss them.

25. **Hard: Reusable Data Table Component with Sorting & Pagination**
    * Build a generic `DataTable` component that takes an API endpoint or a TanStack Query hook as input. Inside the component, manage pagination, sorting, and potentially filtering *using query parameters* passed to the TanStack Query fetch. The component should handle loading states, display the data, and provide UI controls for changing pagination/sorting.

26. **Hard: Dependent Mutations and Transaction-like Behavior**
    * Implement a workflow that requires multiple sequential API calls via mutations (e.g., create a "Project", then use the returned Project ID to create multiple "Tasks" linked to it). Chain the mutations using `onSuccess` callbacks or `async/await` logic within a single handler. Handle potential failures at any step (rollback is complex here, maybe just show a comprehensive error).

27. **Hard: Manual Cache Updates for Complex Responses**
    * Work with an API where mutation responses don't return the full updated object or list (e.g., a DELETE only returns success/failure, or a PUT only returns a status). After a successful mutation, manually update the TanStack Query cache (`queryClient.setQueryData`) to reflect the change based on the *known* state change, rather than relying on a full invalidation and re-fetch.

28. **Hard: Implementing a "Dirty Form" Check Before Navigation**
    * Use `react-hook-form`'s state (`isDirty`) to determine if a form has been modified since it was last reset or submitted. If the user tries to navigate away while the form is dirty, use the browser's `beforeunload` event or a routing library's prompt mechanism to ask for confirmation, preventing accidental data loss.

29. **Hard: Custom Hook for Form with Related List & Mutations**
    * Create a custom hook (e.g., `useItemListForm`) that manages both a form for creating new items (RHF, Zod) and the TanStack Query logic for fetching and displaying the existing list of items. The hook should handle form submission, trigger mutations, and automatically update the list cache upon successful creation.

30. **Hard: Integrating External State Changes into RHF/Zod Validation**
    * Build a form where a validation rule depends on state managed *outside* of `react-hook-form` (e.g., a global setting from a Zustand store, or the state of another complex component). Use `zod`'s `refine` method and potentially RHF's `trigger` or `watch` to re-validate specific fields or the entire form when that external state changes.

---
