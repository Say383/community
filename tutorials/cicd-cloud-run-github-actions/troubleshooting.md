# Troubleshooting GitHub Actions Runs

## Viewing Error Logs

To view error logs for failed GitHub Actions runs, follow these steps:

1. Open the GitHub repository where the workflow is located.
2. Go to the "Actions" tab.
3. Click on the specific workflow run that failed.
4. Scroll down to the "Jobs" section and click on the failed job.
5. In the job details, you will find the error logs. Analyze the logs to identify the cause of the failure.

## Common Error Messages and Solutions

### Error: Build fails with 'No such file or directory' when running a script

If your build fails with the error message 'No such file or directory' when running a script, follow these steps to troubleshoot:
1. Check the file paths in your script commands and make sure they are correct. Ensure that the files referenced in the script exist in the correct locations.
2. Verify that the necessary files are included in your repository and are accessible during the build process.

1. Check the file paths in your script commands and make sure they are correct. Ensure that the files referenced in the script exist in the correct locations.
2. Verify that the necessary files are included in your repository and are accessible during the build process.

### Error: Workflow is not triggered on push

If your workflow is not triggered on push, follow these steps to troubleshoot:
1. Verify the workflow file configuration, including the `on` section specifying the `push` event for the desired branches.
2. Double-check that the branch you are pushing to matches the branch specified in the workflow file.
3. Ensure that the workflow file is located in the correct directory and has the correct file name (`GCP-Deploy.yml` in the `.github/workflows` directory).

1. Verify that the push event is appropriately configured in the workflow file. Check the `on` section of the workflow file and ensure that the `push` event is included for the desired branches.
2. Double-check that the branch you are pushing to matches the branch specified in the workflow file. The branch names are case-sensitive.
3. Ensure that the workflow file is located in the correct directory and has the correct file name (`GCP-Deploy.yml` in the `.github/workflows` directory).

These are just a few examples of common issues and their solutions. If you encounter other errors or need further assistance, refer to the GitHub Actions documentation or reach out to the Google Cloud community forums for support.

## Additional Information

Please provide any additional information about the error you encountered here:
## Additional Information

Please provide any additional information about the error you encountered here:
