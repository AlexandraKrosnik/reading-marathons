import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axiosBaseQuery';

export const booksApi = createApi({
  reducerPath: 'booksRTK',
  baseQuery: axiosBaseQuery({
    // baseUrl: 'https://reading-marathons-backend.onrender.com/api',
    baseUrl: 'http://localhost:3001/api'
  }),
  tagTypes: ['Books', 'BookById', 'Trainings', 'TrainingById'],
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => ({ url: '/books', method: 'GET' }),
      providesTags: ['Books'],
    }),
    addBook: builder.mutation({
      query: values => ({ url: '/books', method: 'POST', data: values }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: id => ({ url: `/books/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Books', 'Trainings', 'TrainingById'],
    }),
    getBookById: builder.query({
      query: id => ({ url: `/books/${id}`, method: 'GET' }),
      providesTags: ['BookById'],
    }),
    updateBookReview: builder.mutation({
      query: params => ({
        url: `/books/${params.id}/review`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Books', 'BookById'],
    }),
    updateBook: builder.mutation({
      query: params => ({
        url: `/books/${params.id}/update`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Books', 'BookById'],
    }),
    getTrainings: builder.query({
      query: () => ({ url: '/trainings', method: 'GET' }),
      providesTags: ['Trainings'],
    }),
    getTrainingById: builder.query({
      query: id => ({ url: `/trainings/${id}`, method: 'GET' }),
      providesTags: ['TrainingById'],
    }),
    addTraining: builder.mutation({
      query: values => ({ url: '/trainings', method: 'POST', data: values }),
      invalidatesTags: ['Books', 'BookById', 'Trainings', 'TrainingById'],
    }),
    updateTrainingById: builder.mutation({
      query: params => ({
        url: `/trainings/${params.id}/update`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Trainings', 'TrainingById'],
    }),
    updateStatisticById: builder.mutation({
      query: params => ({
        url: `/trainings/${params.id}/statistic`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Trainings', 'TrainingById', 'Books'],
    }),
    deleteTrainingById: builder.mutation({
      query: id => ({ url: `/trainings/${id}`, method: 'DELETE' }),
      invalidatesTags: ['TrainingById'],
    }),
    getCollectionAll:  builder.query({
      query: () => ({ url: `/collection/all`, method: 'GET' }),
      providesTags: ['Collection'],
    }),
    getCollectionById: builder.query({
      query: id => ({ url: `/collection/${id}`, method: 'GET' }),
      providesTags: ['Collection']
    }),
    deleteCollection : builder.mutation({
      query: id => ({ url: `/collection/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Collection'],
    }),
    updateCollectionById :builder.mutation({
      query: params => ({
        url: `/collection/${params.id}`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Collection', "Books"],
    }),
    addCollection: builder.mutation({
      query: value => ({url: '/collection', method: 'POST', data: value}),
      invalidatesTags: ['Books', 'BookById', "Collection"]
    })
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
  useUpdateBookMutation,
  useGetTrainingsQuery,
  useGetTrainingByIdQuery,
  useAddTrainingMutation,
  useUpdateTrainingByIdMutation,
  useUpdateStatisticByIdMutation,
  useDeleteTrainingByIdMutation,
  useAddCollectionMutation,
  useGetCollectionAllQuery,
  useGetCollectionByIdQuery,
  useUpdateCollectionByIdMutation,
  useDeleteCollectionMutation,

  // useGetStatisticsByIdQuery,
  // useUpdateStatisticsByIdMutation,
  // useDeleteStatisticsByIdMutation,
} = booksApi;

// ------- Приклад використання хуків
// const { data: trainings } = useGetTrainingQuery();
// console.log('trainings:', trainings);

// const statisticsId = trainings?.data.training[0].statistics;

// console.log('statisticsId', statisticsId);

// const { data: statistics } = useGetStatisticsByIdQuery(statisticsId);

// console.log('statistics:', statistics);

// const [addTraining, { isLoading }] =
//   useAddTrainingMutation();

// const [updateStatisticsById] = useUpdateStatisticsByIdMutation();

// const dataValue = {
//   start: '01-10-2022 13:13:13',
//   finish: '11-10-2022 13:13:13',
//   books: ['633b46275953dc5cd9e39ffa'],
// };

// const statisticsValue = {
//   date: '12-10-2022 13:13:13',
//   pages: 25,
// };

// ------- Приклад використання мутацій
// <Button
//   onClick={() => {
//     addTraining(dataValue);
//   }}
// >
//   add
// </Button>
// <Button
//   onClick={() => {
//     updateStatisticsById({
//       id: statisticsId,
//       data: { ...statisticsValue },
//     });
//   }}
// >
//   add stat
// </Button>
