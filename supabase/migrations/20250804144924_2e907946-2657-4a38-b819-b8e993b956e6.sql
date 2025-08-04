-- Create a storage bucket for documents
INSERT INTO storage.buckets (id, name, public) 
VALUES ('documents', 'documents', true);

-- Create policies for document access
CREATE POLICY "Documents are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'documents');

CREATE POLICY "Authenticated users can upload documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'documents' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update their documents" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'documents' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete their documents" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'documents' AND auth.role() = 'authenticated');