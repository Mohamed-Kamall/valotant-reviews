import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import CustonButton from '../shared/CustonButton';

const reviewSchema = yup.object({
    title : yup.string().required().min(3),
    body : yup.string().required().min(5),
    rating : yup.string().required().test('is num 1-5','Rating must be 1-5',(val)=>{return parseInt(val) < 6 && parseInt(val) > 0;})
})

export default function ReviewForm({AddReview}) {
    return (
        <View style={globalStyles.container}>
            <Formik 
                validationSchema={reviewSchema}
                initialValues={{title : '', body : '', rating : ''}}
                onSubmit={(values)=>{
                    AddReview(values);
                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder = 'Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title') }
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder = 'Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body') }
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={globalStyles.input}
                            placeholder = 'Rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <CustonButton text='submit' handler={props.handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )
}
