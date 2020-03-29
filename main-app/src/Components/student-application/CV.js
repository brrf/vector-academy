import React, {useState, useRef, useEffect} from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';


function CV (props) {
	const [file, updateFile] = useState('');
	const [pdfFile, updatePdf] = useState(null);
	const [edit, updateEdit] = useState(props.complete);
	const [pdfStatus, updatePdfState] = useState({
		pageNumber: 1,
		numPages: null
	})
	const form = useRef(null);
	const localFile = useRef(null);
	const pdf = useRef(null);

	//get any already existing data and update local state
	useEffect(getFormData, []);
	function getFormData () {
		if (!props.data || !props.userId) return;
		updateFile(props.data);

		fetch(`${PROTOCOL}apply.${DOMAIN}/cv`, {
	      method: "GET",
	      headers: { 
	        "Content-Type": "application/pdf",
	      },
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.blob())
	    .then(blob => {
	    	updatePdf(blob);
	    });
	};

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);

	function onDocumentLoadSuccess({numPages}) {
		updatePdfState({
			...pdfStatus,
			numPages
		})
	}

	function handlePdfPage (boolean) {
		const {pageNumber, numPages} = pdfStatus
		if (boolean && pageNumber === numPages) return;
		if (!boolean && pageNumber === 1) return;

		if (boolean) {
			updatePdfState({
				...pdfStatus,
				pageNumber: pageNumber + 1
			})
		}
		if (!boolean) {
			updatePdfState({
				...pdfStatus,
				pageNumber: pageNumber - 1
			})
		}
	}

	if (edit) {
		const pdfWidth = pdf.current ? pdf.current.offsetWidth : 0;
		const {pageNumber, numPages} = pdfStatus;
	
		return (
			<React.Fragment>	
				{
					file
					?	<div ref={pdf}> 
							<Document
					          file={pdfFile}
					          options={{ withCredentials: true }}
					          onLoadSuccess={onDocumentLoadSuccess}
					        >
					        	<Page pageNumber={pageNumber} width={pdfWidth} />
					        </Document>
					        {
					        	numPages
						        ?	<div className='pdf-page'>
										<FontAwesomeIcon
							                icon={faMinus}
							               	onClick={() => handlePdfPage(false)}
							               	className='pdf-page-change'
						          		/>
										<p style={{fontWeight: 'bold'}}>Page {pageNumber} of {numPages}</p>
										<FontAwesomeIcon
							                icon={faPlus}
							                onClick={() => handlePdfPage(true)}
							               	className='pdf-page-change'
						          		/>
									</div>
								:   null
					        }
					        
						</div>
				    : 	null
				}		
				<button onClick={(edit) => updateEdit(!edit)} className='application-complete-edit'>Edit</button>
				<ApplicationEditButtons handleApplicationStep={props.handleApplicationStep}/>
			</React.Fragment>
		)
	}
	
	return (		
		<React.Fragment>
			<div className='application-input'>
				<p>Please upload your CV. Ensure that it contains any extracurriculuar activities or hobbies.</p>
				<form onSubmit={(e) => props.handleSubmit(e, file, true)} ref={form}>
					<div className='file-upload'>
						<p>Please upload .pdf files only</p>
						<input
							type='file'
							accept='application/pdf'
							onChange={() => updateFile(localFile.current.files[0])}
							ref={localFile}
						/>
					</div>
					<ApplicationSubmitButtons form={form} handleSubmit={props.handleSubmit} formData={file} handleApplicationStep={props.handleApplicationStep} />
				</form>
			</div>
		</React.Fragment>
	)
};

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.cv ? true : false
	return {
		complete,
		data: state.application.applicationStatus.application.cv,
		userId: state.user.user.id,
	}
};

export default connect(mapStateToProps)(CV);